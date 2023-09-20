import { useState, useEffect } from 'react'
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  Source,
  Layer,
  NavigationControl
} from 'react-map-gl'

import cars from './assets/images/cars.png'

type Route = {
  acquisition_time: string
  acquisition_time_unix: number
  address: string
  direction: number
  latitude: number
  longitude: number
  speed: number
}

function App() {
  const [viewState, setViewState] = useState({
    longitude: -46.28054,
    latitude: -23.963214,
    zoom: 12
  })

  const [start, setStart] = useState<number[]>([])
  const [end, setEnd] = useState<number[]>([])
  const [coords, setCoords] = useState<number[]>([])

  const [routes1, setRoutes1] = useState<Route[]>([])
  const [routes1Start, setRoutes1Start] = useState<boolean>()
  const [routes2, setRoutes2] = useState<Route[]>([])
  const [routes2Start, setRoutes2Start] = useState<boolean>()
  const [routes3, setRoutes3] = useState<Route[]>([])
  const [routes3Start, setRoutes3Start] = useState<boolean>()
  const [routes4, setRoutes4] = useState<Route[]>([])
  const [routes4Start, setRoutes4Start] = useState<boolean>()
  const [routes5, setRoutes5] = useState<Route[]>([])
  const [routes5Start, setRoutes5Start] = useState<boolean>()

  const [currentLocationIndex1, setCurrentLocationIndex1] = useState<number>(0)
  const [currentLocationIndex2, setCurrentLocationIndex2] = useState<number>(0)
  const [currentLocationIndex3, setCurrentLocationIndex3] = useState<number>(0)
  const [currentLocationIndex4, setCurrentLocationIndex4] = useState<number>(0)
  const [currentLocationIndex5, setCurrentLocationIndex5] = useState<number>(0)

  const [bestRoute, setBestRoute] = useState<boolean>(false)

  useEffect(() => {
    getSimulatedRoute()
    getRoute()
  }, [start, end])

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

    setRoutes1(data.courses[0].gps)
    setRoutes2(data.courses[1].gps)
    setRoutes3(data.courses[2].gps)
    setRoutes4(data.courses[3].gps)
    setRoutes5(data.courses[4].gps)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLocationIndex1 < routes1.length - 1) {
        setCurrentLocationIndex1(currentLocationIndex1 + 1)
        console.log(currentLocationIndex1)
      } else if (currentLocationIndex1 === routes1.length - 1) {
        setRoutes1Start(false)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [currentLocationIndex1, routes1Start])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLocationIndex2 < routes2.length - 1) {
        setCurrentLocationIndex2(currentLocationIndex2 + 1)
        console.log(currentLocationIndex2)
      } else if (currentLocationIndex2 === routes2.length - 1) {
        setRoutes2Start(false)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [currentLocationIndex2, routes2Start])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLocationIndex3 < routes3.length - 1) {
        setCurrentLocationIndex3(currentLocationIndex3 + 1)
        console.log(currentLocationIndex3)
      } else if (currentLocationIndex3 === routes3.length - 1) {
        setRoutes3Start(false)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [currentLocationIndex3, routes3Start])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLocationIndex4 < routes4.length - 1) {
        setCurrentLocationIndex4(currentLocationIndex4 + 1)
        console.log(currentLocationIndex4)
      } else if (currentLocationIndex4 === routes4.length - 1) {
        setRoutes4Start(false)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [currentLocationIndex4, routes4Start])

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLocationIndex5 < routes5.length - 1) {
        setCurrentLocationIndex5(currentLocationIndex5 + 1)
        console.log(currentLocationIndex5)
      } else if (currentLocationIndex5 === routes5.length - 1) {
        setRoutes5Start(false)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [currentLocationIndex5, routes5Start])

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

  const endPoint: GeoJSON.FeatureCollection<GeoJSON.Point> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [...end]
        },
        properties: {}
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

  const startRoute1 = () => {
    setCurrentLocationIndex1(0)
    setStart([-46.28054, -23.963214])
    setEnd([-46.278736, -23.913536])
    setRoutes1Start(true)
  }
  const startRoute2 = () => {
    setCurrentLocationIndex2(0)
    setStart([-46.278702, -23.913509])
    setEnd([-46.280632, -23.963248])
    setRoutes2Start(true)
  }
  const startRoute3 = () => {
    setCurrentLocationIndex3(0)
    setStart([-46.280566, -23.963217])
    setEnd([-46.282903, -23.964515])
    setRoutes3Start(true)
  }
  const startRoute4 = () => {
    setCurrentLocationIndex4(0)
    setStart([-46.282916, -23.964503])
    setEnd([-46.265922, -23.973034])
    setRoutes4Start(true)
  }
  const startRoute5 = () => {
    setCurrentLocationIndex5(0)
    setStart([-46.265751, -23.973013])
    setEnd([-46.27787, -23.963164])
    setRoutes5Start(true)
  }

  const calculateRotationStyle = (angle: number) => {
    return {
      transform: `rotate(${angle}deg)`
    }
  }

  const showBestRoute = () => {
    setBestRoute(!bestRoute)
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

        {routes1Start === true ? (
          <>
            <Marker
              longitude={routes1[currentLocationIndex1].longitude}
              latitude={routes1[currentLocationIndex1].latitude}
            >
              <div
                className="car__marker"
                style={calculateRotationStyle(
                  routes1[currentLocationIndex1].direction
                )}
              >
                <img className="car__marker__img" src={cars} alt="" />
              </div>
            </Marker>

            {bestRoute === true && (
              <>
                <Source id="routeSource" type="geojson" data={geojson}>
                  <Layer {...lineStyle} />
                </Source>

                <Source id="endSource" type="geojson" data={endPoint}>
                  <Layer {...layerEndpoint} />
                </Source>
              </>
            )}
          </>
        ) : (
          ''
        )}

        {routes2Start === true ? (
          <>
            <Marker
              longitude={routes2[currentLocationIndex2].longitude}
              latitude={routes2[currentLocationIndex2].latitude}
            >
              <div
                className="car__marker"
                style={calculateRotationStyle(
                  routes2[currentLocationIndex2].direction
                )}
              >
                <img className="car__marker__img" src={cars} alt="" />
              </div>
            </Marker>
            {bestRoute === true && (
              <>
                <Source id="routeSource" type="geojson" data={geojson}>
                  <Layer {...lineStyle} />
                </Source>

                <Source id="endSource" type="geojson" data={endPoint}>
                  <Layer {...layerEndpoint} />
                </Source>
              </>
            )}
          </>
        ) : (
          ''
        )}

        {routes3Start === true ? (
          <>
            <Marker
              longitude={routes3[currentLocationIndex3].longitude}
              latitude={routes3[currentLocationIndex3].latitude}
            >
              <div
                className="car__marker"
                style={calculateRotationStyle(
                  routes3[currentLocationIndex3].direction
                )}
              >
                <img className="car__marker__img" src={cars} alt="" />
              </div>
            </Marker>
            {bestRoute === true && (
              <>
                <Source id="routeSource" type="geojson" data={geojson}>
                  <Layer {...lineStyle} />
                </Source>

                <Source id="endSource" type="geojson" data={endPoint}>
                  <Layer {...layerEndpoint} />
                </Source>
              </>
            )}
          </>
        ) : (
          ''
        )}

        {routes4Start === true ? (
          <>
            <Marker
              longitude={routes4[currentLocationIndex4].longitude}
              latitude={routes4[currentLocationIndex4].latitude}
            >
              <div
                className="car__marker"
                style={calculateRotationStyle(
                  routes4[currentLocationIndex4].direction
                )}
              >
                <img className="car__marker__img" src={cars} alt="" />
              </div>
            </Marker>
            {bestRoute === true && (
              <>
                <Source id="routeSource" type="geojson" data={geojson}>
                  <Layer {...lineStyle} />
                </Source>

                <Source id="endSource" type="geojson" data={endPoint}>
                  <Layer {...layerEndpoint} />
                </Source>
              </>
            )}
          </>
        ) : (
          ''
        )}

        {routes5Start === true ? (
          <>
            <Marker
              longitude={routes5[currentLocationIndex5].longitude}
              latitude={routes5[currentLocationIndex5].latitude}
            >
              <div
                className="car__marker"
                style={calculateRotationStyle(
                  routes5[currentLocationIndex5].direction
                )}
              >
                <img className="car__marker__img" src={cars} alt="" />
              </div>
            </Marker>
            {bestRoute === true && (
              <>
                <Source id="routeSource" type="geojson" data={geojson}>
                  <Layer {...lineStyle} />
                </Source>

                <Source id="endSource" type="geojson" data={endPoint}>
                  <Layer {...layerEndpoint} />
                </Source>
              </>
            )}
          </>
        ) : (
          ''
        )}
      </Map>
      <div>
        <button onClick={startRoute1}>Iniciar rota 1</button>
        <button onClick={startRoute2}>Iniciar rota 2</button>
        <button onClick={startRoute3}>Iniciar rota 3</button>
        <button onClick={startRoute4}>Iniciar rota 4</button>
        <button onClick={startRoute5}>Iniciar rota 5</button>
      </div>
      <div>
        <button onClick={showBestRoute}>Esconder/Exibir melhor rota</button>
      </div>
    </>
  )
}

export default App
