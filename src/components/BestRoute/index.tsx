import { Source, Layer } from 'react-map-gl'
import { useState, useEffect } from 'react'

type Props = {
  start: number[]
  end: number[]
}

export default function BestRoute({ start, end }: Props) {
  const [coords, setCoords] = useState<number[]>([])

  useEffect(() => {
    getRoute()
  }, [])

  const getRoute = async () => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1Ijoic2FudGFuYWZ4IiwiYSI6ImNsbXF2aXFhdDAxaDAyaXBqMXRvb2IxNnIifQ.tqESIHRN6mDXgVvKEVeQRQ`
    )
    const data = await response.json()
    const coords = data.routes[0].geometry.coordinates
    setCoords(coords)
  }

  const geojson: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [...coords]
        }
      }
    ]
  }

  const lineStyle = {
    id: 'roadLayer',
    type: 'line',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': 'black',
      'line-width': 7,
      'line-opacity': 0.8
    }
  }

  return (
    <>
      <Source id="routeSource" type="geojson" data={geojson}>
        <Layer {...lineStyle} />
      </Source>
    </>
  )
}
