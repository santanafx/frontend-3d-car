import { Source, Layer } from 'react-map-gl'
import { useState, useEffect } from 'react'

type Props = {
  start: number[]
  end: number[]
  longitude: number
  latitude: number
}

export default function VehicleRoute({
  start,
  end,
  longitude,
  latitude
}: Props) {
  const [coords, setCoords] = useState<number[]>([])

  useEffect(() => {
    if (coords.length === 0) {
      setCoords([start])
    } else {
      setCoords((coords) => [...coords, [longitude, latitude]])
    }
  }, [start, end, longitude, latitude])

  const route: GeoJSON.FeatureCollection<GeoJSON.LineString> = {
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

  const routeStyle = {
    id: 'routeSource2',
    type: 'line',
    layout: {
      'line-join': 'round',
      'line-cap': 'round'
    },
    paint: {
      'line-color': 'blue',
      'line-width': 5,
      'line-opacity': 1
    }
  }

  return (
    <>
      <Source id="routeSource2" type="geojson" data={route}>
        <Layer {...routeStyle} />
      </Source>
    </>
  )
}
