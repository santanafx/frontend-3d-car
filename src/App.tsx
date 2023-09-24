import { useState, useEffect } from 'react'
import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl
} from 'react-map-gl'

import { Route } from './types'

import CarMarker from './components/CarMarker'
import BestRoute from './components/BestRoute'
import Options from './components/Options'
import VehicleRoute from './components/VehicleRoute'

function App() {
  const [viewState, setViewState] = useState({
    longitude: -46.28054,
    latitude: -23.963214,
    zoom: 12
  })

  const [start, setStart] = useState<number[]>([])
  const [end, setEnd] = useState<number[]>([])

  const [routes1, setRoutes1] = useState<Route[]>([])
  const [routes1Start, setRoutes1Start] = useState<boolean>(false)
  const [routes2, setRoutes2] = useState<Route[]>([])
  const [routes2Start, setRoutes2Start] = useState<boolean>(false)
  const [routes3, setRoutes3] = useState<Route[]>([])
  const [routes3Start, setRoutes3Start] = useState<boolean>(false)
  const [routes4, setRoutes4] = useState<Route[]>([])
  const [routes4Start, setRoutes4Start] = useState<boolean>(false)
  const [routes5, setRoutes5] = useState<Route[]>([])
  const [routes5Start, setRoutes5Start] = useState<boolean>(false)

  const [currentLocationIndex, setCurrentLocationIndex] = useState<number>(0)

  const [bestRoute, setBestRoute] = useState<boolean>(false)

  const [follow, setFollow] = useState<boolean>(false)

  const [vehicleMoving, setVehicleMoving] = useState<boolean>(false)
  const [vehicleStoppedMoving, setVehicleStoppedMoving] =
    useState<boolean>(false)

  useEffect(() => {
    getSimulatedRoute()
  }, [])

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
    let timeoutId: number

    const updateLocation = (routes: Route[]) => {
      setCurrentLocationIndex((prevIndex) => {
        if (prevIndex < routes.length - 1) {
          console.log(prevIndex)
          return prevIndex + 1
        } else {
          setVehicleStoppedMoving(true)
          setViewState({
            longitude: -46.28054,
            latitude: -23.963214,
            zoom: 12
          })
          clearTimeout(timeoutId)
          return prevIndex
        }
      })
    }

    if (routes1Start) {
      timeoutId = setTimeout(
        () => updateLocation(routes1),
        routes1[currentLocationIndex].speed !== 0
          ? 10000 / routes1[currentLocationIndex].speed
          : 1000
      )
    }
    if (routes2Start) {
      timeoutId = setTimeout(
        () => updateLocation(routes2),
        routes2[currentLocationIndex].speed !== 0
          ? 10000 / routes2[currentLocationIndex].speed
          : 1000
      )
    }
    if (routes3Start) {
      timeoutId = setTimeout(
        () => updateLocation(routes3),
        routes3[currentLocationIndex].speed !== 0
          ? 10000 / routes3[currentLocationIndex].speed
          : 1000
      )
    }
    if (routes4Start) {
      timeoutId = setTimeout(
        () => updateLocation(routes4),
        routes4[currentLocationIndex].speed !== 0
          ? 10000 / routes4[currentLocationIndex].speed
          : 1000
      )
    }
    if (routes5Start) {
      timeoutId = setTimeout(
        () => updateLocation(routes5),
        routes5[currentLocationIndex].speed !== 0
          ? 10000 / routes5[currentLocationIndex].speed
          : 1000
      )
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [
    currentLocationIndex,
    routes1Start,
    routes2Start,
    routes3Start,
    routes4Start,
    routes5Start
  ])

  const startRoute1 = () => {
    setCurrentLocationIndex(0)
    setStart([-46.28054, -23.963214])
    setEnd([-46.278736, -23.913536])
    setRoutes1Start(true)
    setVehicleMoving(true)
  }

  const startRoute2 = () => {
    setCurrentLocationIndex(0)
    setStart([-46.278702, -23.913509])
    setEnd([-46.280632, -23.963248])
    setRoutes2Start(true)
    setVehicleMoving(true)
  }

  const startRoute3 = () => {
    setCurrentLocationIndex(0)
    setStart([-46.280566, -23.963217])
    setEnd([-46.282903, -23.964515])
    setRoutes3Start(true)
    setVehicleMoving(true)
  }

  const startRoute4 = () => {
    setCurrentLocationIndex(0)
    setStart([-46.282916, -23.964503])
    setEnd([-46.265922, -23.973034])
    setRoutes4Start(true)
    setVehicleMoving(true)
  }

  const startRoute5 = () => {
    setCurrentLocationIndex(0)
    setStart([-46.265751, -23.973013])
    setEnd([-46.27787, -23.963164])
    setRoutes5Start(true)
    setVehicleMoving(true)
  }

  const showBestRoute = () => {
    setBestRoute(!bestRoute)
  }

  const followVehicle = () => {
    setFollow(!follow)
  }

  return (
    <main className="map__container">
      <Map
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/santanafx/clmquada7053k01qxbeovgszz"
        mapboxAccessToken="pk.eyJ1Ijoic2FudGFuYWZ4IiwiYSI6ImNsbXF2aXFhdDAxaDAyaXBqMXRvb2IxNnIifQ.tqESIHRN6mDXgVvKEVeQRQ"
        style={{ width: '90vw', height: '75vh' }}
      >
        <GeolocateControl />
        <FullscreenControl />
        <NavigationControl />

        {routes1Start === true ? (
          <>
            <CarMarker
              longitude={routes1[currentLocationIndex].longitude}
              latitude={routes1[currentLocationIndex].latitude}
              direction={routes1[currentLocationIndex].direction}
              speed={routes1[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {bestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={routes1[currentLocationIndex].longitude}
              latitude={routes1[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}

        {routes2Start === true ? (
          <>
            <CarMarker
              longitude={routes2[currentLocationIndex].longitude}
              latitude={routes2[currentLocationIndex].latitude}
              direction={routes2[currentLocationIndex].direction}
              speed={routes2[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {bestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={routes2[currentLocationIndex].longitude}
              latitude={routes2[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}

        {routes3Start === true ? (
          <>
            <CarMarker
              longitude={routes3[currentLocationIndex].longitude}
              latitude={routes3[currentLocationIndex].latitude}
              direction={routes3[currentLocationIndex].direction}
              speed={routes3[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {bestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={routes3[currentLocationIndex].longitude}
              latitude={routes3[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}

        {routes4Start === true ? (
          <>
            <CarMarker
              longitude={routes4[currentLocationIndex].longitude}
              latitude={routes4[currentLocationIndex].latitude}
              direction={routes4[currentLocationIndex].direction}
              speed={routes4[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {bestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={routes4[currentLocationIndex].longitude}
              latitude={routes4[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}

        {routes5Start === true ? (
          <>
            <CarMarker
              longitude={routes5[currentLocationIndex].longitude}
              latitude={routes5[currentLocationIndex].latitude}
              direction={routes5[currentLocationIndex].direction}
              speed={routes5[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {bestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={routes5[currentLocationIndex].longitude}
              latitude={routes5[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}
      </Map>
      <Options
        startRoute1={startRoute1}
        startRoute2={startRoute2}
        startRoute3={startRoute3}
        startRoute4={startRoute4}
        startRoute5={startRoute5}
        showBestRoute={showBestRoute}
        bestRoute={bestRoute}
        followVehicle={followVehicle}
        follow={follow}
        setVehicleMoving={setVehicleMoving}
        vehicleMoving={vehicleMoving}
        vehicleStoppedMoving={vehicleStoppedMoving}
        setRoutes1Start={setRoutes1Start}
        setRoutes2Start={setRoutes2Start}
        setRoutes3Start={setRoutes3Start}
        setRoutes4Start={setRoutes4Start}
        setRoutes5Start={setRoutes5Start}
        setVehicleStoppedMoving={setVehicleStoppedMoving}
      />
    </main>
  )
}

export default App
