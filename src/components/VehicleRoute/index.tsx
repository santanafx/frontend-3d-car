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
  const [coords, setCoords] = useState<number[][]>([])

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
          coordinates: coords
        },
        properties: {}
      }
    ]
  }

  const endPoint: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: end
        },
        properties: {}
      }
    ]
  }

  const startPoint: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: start
        },
        properties: {}
      }
    ]
  }

  return (
    <>
      <Source id="routeSource2" type="geojson" data={route}>
        <Layer
          id="routeSource2"
          type="line"
          layout={{ 'line-join': 'round', 'line-cap': 'round' }}
          paint={{ 'line-color': 'blue', 'line-width': 5, 'line-opacity': 1 }}
        />
      </Source>
      <Source id="endSource" type="geojson" data={endPoint}>
        <Layer
          id="end"
          type="circle"
          paint={{
            'circle-radius': 10,
            'circle-color': '#f30'
          }}
        />
      </Source>
      <Source id="startSource" type="geojson" data={startPoint}>
        <Layer
          id="start"
          type="circle"
          paint={{
            'circle-radius': 10,
            'circle-color': '#00ff1a'
          }}
        />
      </Source>
    </>
  )
}
