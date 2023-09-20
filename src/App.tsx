import car from './assets/images/car.png'
import cars from './assets/images/cars.png'
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

  const [start, setStart] = useState([])
  const [end, setEnd] = useState([])
  const [coords, setCoords] = useState([])
  const [routes1, setRoutes1] = useState([])
  const [routes1Start, setRoutes1Start] = useState(false)
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0)

  useEffect(() => {
    getRoute()
    getSimulatedRoute()
  }, [end, start])

  const getRoute = async () => {
    const response = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=pk.eyJ1Ijoic2FudGFuYWZ4IiwiYSI6ImNsbXF2aXFhdDAxaDAyaXBqMXRvb2IxNnIifQ.tqESIHRN6mDXgVvKEVeQRQ`
    )
    const data = await response.json()

    const coords = data.routes[0].geometry.coordinates
    setCoords(coords)
  }

  const getSimulatedRoute = async () => {
    const response = await fetch('./frontend_data_gps.json')
    const data = await response.json()

    console.log(data.courses)

    setRoutes1(data.courses[0].gps)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLocationIndex < routes1.length - 1) {
        setCurrentLocationIndex(currentLocationIndex + 1)
        console.log(currentLocationIndex)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [currentLocationIndex, routes1Start])

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
      'circle-radius': 30,
      'circle-color': '#f30'
    }
  }

  const startRoute1 = () => {
    setStart([-46.28054, -23.963214])
    setEnd([-46.278736, -23.913536])
    setRoutes1Start(!routes1Start)
  }

  return (
    <>
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
        {currentLocationIndex < routes1.length && (
          <Marker
            longitude={routes1[currentLocationIndex].longitude}
            latitude={routes1[currentLocationIndex].latitude}
          >
            <div className="marker">📍</div>
          </Marker>
        )}
        {routes1Start === true && (
          <>
            <Source id="routeSource" type="geojson" data={geojson}>
              <Layer {...lineStyle} />
            </Source>

            <Source id="endSource" type="geojson" data={endPoint}>
              <Layer {...layerEndpoint} />
            </Source>
          </>
        )}
      </Map>
      <button onClick={startRoute1}>Iniciar rota 1</button>
    </>
  )
}

export default App
