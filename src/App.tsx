import { useState, useEffect } from 'react'
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  Source,
  Layer,
  NavigationControl
} from 'react-map-gl'

function App() {
  const [viewState, setViewState] = useState({
    longitude: -46.28054,
    latitude: -23.963214,
    zoom: 12
  })

  const [start, setStart] = useState([-46.28054, -23.963214])
  const [end, setEnd] = useState([-46.278736, -23.913536])
  const [coords, setCoords] = useState([])
  const [routes1, setRoutes1] = useState([])
  const [routes2, setRoutes2] = useState([])
  const [routes3, setRoutes3] = useState([])
  const [routes4, setRoutes4] = useState([])

  useEffect(() => {
    getRoute()
  }, [end, start])

  const getRoute = async () => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1Ijoic2FudGFuYWZ4IiwiYSI6ImNsbXF2aXFhdDAxaDAyaXBqMXRvb2IxNnIifQ.tqESIHRN6mDXgVvKEVeQRQ`
    )
    const data = await response.json()

    const coords = data.routes[0].geometry.coordinates
    setCoords(coords)
  }

  const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'feature',
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
      'line-width': 5,
      'line-opacity': 0.75
    }
  }

  const endPoint = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'feature',
        geometry: {
          type: 'Point',
          coordinates: [...end]
        }
      }
    ]
  }

  const layerEndpoint = {
    id: 'end',
    type: 'circle',
    source: {
      type: 'geojson',
      data: end
    },
    paint: {
      'circle-radius': 10,
      'circle-color': '#f30'
    }
  }

  fetch('./frontend_data_gps.json', {
    headers: {
      Accept: 'application/json'
    }
  }).then((res) =>
    res.json().then((res) => {
      setRoutes1(res.courses[0].gps)
      setRoutes2(res.courses[0].gps)
      setRoutes3(res.courses[0].gps)
      setRoutes4(res.courses[0].gps)
    })
  )

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/santanafx/clmquada7053k01qxbeovgszz"
      mapboxAccessToken="pk.eyJ1Ijoic2FudGFuYWZ4IiwiYSI6ImNsbXF2aXFhdDAxaDAyaXBqMXRvb2IxNnIifQ.tqESIHRN6mDXgVvKEVeQRQ"
      style={{ width: '90vw', height: '90vh' }}
    >
      <GeolocateControl />
      <FullscreenControl />
      <NavigationControl />
      {routes1.map((element) => (
        <div key={element.acquisition_time}>
          <Marker longitude={element.longitude} latitude={element.latitude} />

          <Source id="routeSource" type="geojson" data={geojson}>
            <Layer {...lineStyle} />
          </Source>

          <Source id="endSource" type="geojson" data={endPoint}>
            <Layer {...layerEndpoint} />
          </Source>
        </div>
      ))}
    </Map>
  )
}

export default App
