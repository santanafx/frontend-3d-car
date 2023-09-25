import { useState, useEffect } from 'react'
import Map, {
  FullscreenControl,
  GeolocateControl,
  NavigationControl
} from 'react-map-gl'
import { useDispatch, useSelector } from 'react-redux'

import CarMarker from './components/CarMarker'
import BestRoute from './components/BestRoute'
import Options from './components/Options'
import VehicleRoute from './components/VehicleRoute'
import {
  changeVehicleMoving,
  changeVehicleStoppedMoving,
  fifthRouteSelect,
  firstRouteSelect,
  fourthRouteSelect,
  secondRouteSelect,
  thirdRouteSelect
} from './store/reducers/vehicleData'
import { RootReducer } from './store'

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
  const {
    firstRouteSelected,
    secondRouteSelected,
    thirdRouteSelected,
    fourthRouteSelected,
    fifthRouteSelected,
    showBestRoute,
    follow
  } = useSelector((state: RootReducer) => state.vehicleData)

  const dispatch = useDispatch()

  const [start, setStart] = useState<number[]>([])
  const [end, setEnd] = useState<number[]>([])

  const [firstRoute, setFirstRoute] = useState<Route[]>([])
  const [secondRoute, setSecondRoute] = useState<Route[]>([])
  const [thirdRoute, setThirdRoute] = useState<Route[]>([])
  const [fourthRoute, setFourthRoute] = useState<Route[]>([])
  const [fifthRoute, setFifthRoute] = useState<Route[]>([])

  const [currentLocationIndex, setCurrentLocationIndex] = useState<number>(0)

  const [viewState, setViewState] = useState({
    longitude: -46.28054,
    latitude: -23.963214,
    zoom: 12
  })

  useEffect(() => {
    getSimulatedRoute()
  }, [])

  const getSimulatedRoute = async () => {
    const response = await fetch('/frontend_data_gps.json')
    const data = await response.json()

    setFirstRoute(data.courses[0].gps)
    setSecondRoute(data.courses[1].gps)
    setThirdRoute(data.courses[2].gps)
    setFourthRoute(data.courses[3].gps)
    setFifthRoute(data.courses[4].gps)
  }

  useEffect(() => {
    let timeoutId: number

    const updateLocation = (routes: Route[]) => {
      setCurrentLocationIndex((prevIndex) => {
        if (prevIndex < routes.length - 1) {
          return prevIndex + 1
        } else {
          dispatch(changeVehicleStoppedMoving(true))
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

    if (firstRouteSelected) {
      timeoutId = setTimeout(
        () => updateLocation(firstRoute),
        firstRoute[currentLocationIndex].speed !== 0
          ? 10000 / firstRoute[currentLocationIndex].speed
          : 3000
      )
    }
    if (secondRouteSelected) {
      timeoutId = setTimeout(
        () => updateLocation(secondRoute),
        secondRoute[currentLocationIndex].speed !== 0
          ? 10000 / secondRoute[currentLocationIndex].speed
          : 3000
      )
    }
    if (thirdRouteSelected) {
      timeoutId = setTimeout(
        () => updateLocation(thirdRoute),
        thirdRoute[currentLocationIndex].speed !== 0
          ? 10000 / thirdRoute[currentLocationIndex].speed
          : 3000
      )
    }
    if (fourthRouteSelected) {
      timeoutId = setTimeout(
        () => updateLocation(fourthRoute),
        fourthRoute[currentLocationIndex].speed !== 0
          ? 10000 / fourthRoute[currentLocationIndex].speed
          : 3000
      )
    }
    if (fifthRouteSelected) {
      timeoutId = setTimeout(
        () => updateLocation(fifthRoute),
        fifthRoute[currentLocationIndex].speed !== 0
          ? 10000 / fifthRoute[currentLocationIndex].speed
          : 3000
      )
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [
    currentLocationIndex,
    firstRouteSelected,
    secondRouteSelected,
    thirdRouteSelected,
    fourthRouteSelected,
    fifthRouteSelected
  ])

  const startFirstRoute = () => {
    setCurrentLocationIndex(0)
    setStart([-46.28054, -23.963214])
    setEnd([-46.278736, -23.913536])
    dispatch(firstRouteSelect(true))
    dispatch(changeVehicleMoving(true))
  }

  const startSecondRoute = () => {
    setCurrentLocationIndex(0)
    setStart([-46.278702, -23.913509])
    setEnd([-46.280632, -23.963248])
    dispatch(secondRouteSelect(true))
    dispatch(changeVehicleMoving(true))
  }

  const startThirdRoute = () => {
    setCurrentLocationIndex(0)
    setStart([-46.280566, -23.963217])
    setEnd([-46.282903, -23.964515])
    dispatch(thirdRouteSelect(true))
    dispatch(changeVehicleMoving(true))
  }

  const startFourthRoute = () => {
    setCurrentLocationIndex(0)
    setStart([-46.282916, -23.964503])
    setEnd([-46.265922, -23.973034])
    dispatch(fourthRouteSelect(true))
    dispatch(changeVehicleMoving(true))
  }

  const startFifthRoute = () => {
    setCurrentLocationIndex(0)
    setStart([-46.265751, -23.973013])
    setEnd([-46.27787, -23.963164])
    dispatch(fifthRouteSelect(true))
    dispatch(changeVehicleMoving(true))
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

        {firstRouteSelected === true ? (
          <>
            <CarMarker
              longitude={firstRoute[currentLocationIndex].longitude}
              latitude={firstRoute[currentLocationIndex].latitude}
              direction={firstRoute[currentLocationIndex].direction}
              speed={firstRoute[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {showBestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={firstRoute[currentLocationIndex].longitude}
              latitude={firstRoute[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}

        {secondRouteSelected === true ? (
          <>
            <CarMarker
              longitude={secondRoute[currentLocationIndex].longitude}
              latitude={secondRoute[currentLocationIndex].latitude}
              direction={secondRoute[currentLocationIndex].direction}
              speed={secondRoute[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {showBestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={secondRoute[currentLocationIndex].longitude}
              latitude={secondRoute[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}

        {thirdRouteSelected === true ? (
          <>
            <CarMarker
              longitude={thirdRoute[currentLocationIndex].longitude}
              latitude={thirdRoute[currentLocationIndex].latitude}
              direction={thirdRoute[currentLocationIndex].direction}
              speed={thirdRoute[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {showBestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={thirdRoute[currentLocationIndex].longitude}
              latitude={thirdRoute[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}

        {fourthRouteSelected === true ? (
          <>
            <CarMarker
              longitude={fourthRoute[currentLocationIndex].longitude}
              latitude={fourthRoute[currentLocationIndex].latitude}
              direction={fourthRoute[currentLocationIndex].direction}
              speed={fourthRoute[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {showBestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={fourthRoute[currentLocationIndex].longitude}
              latitude={fourthRoute[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}

        {fifthRouteSelected === true ? (
          <>
            <CarMarker
              longitude={fifthRoute[currentLocationIndex].longitude}
              latitude={fifthRoute[currentLocationIndex].latitude}
              direction={fifthRoute[currentLocationIndex].direction}
              speed={fifthRoute[currentLocationIndex].speed}
              setViewStateProp={setViewState}
              follow={follow}
            />
            {showBestRoute === true && <BestRoute start={start} end={end} />}

            <VehicleRoute
              start={start}
              end={end}
              longitude={fifthRoute[currentLocationIndex].longitude}
              latitude={fifthRoute[currentLocationIndex].latitude}
            />
          </>
        ) : (
          ''
        )}
      </Map>
      <Options
        startFirstRoute={startFirstRoute}
        startSecondRoute={startSecondRoute}
        startThirdRoute={startThirdRoute}
        startFourthRoute={startFourthRoute}
        startFifthRoute={startFifthRoute}
      />
    </main>
  )
}

export default App
