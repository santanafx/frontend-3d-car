import { useDispatch } from 'react-redux'
import {
  fifthRouteSelect,
  firstRouteSelect,
  fourthRouteSelect,
  secondRouteSelect,
  thirdRouteSelect
} from '../../store/reducers/vehicleData'

type Props = {
  bestRoute: boolean
  follow: boolean
  vehicleMoving: boolean
  vehicleStoppedMoving: boolean
  startRoute1: () => void
  startRoute2: () => void
  startRoute3: () => void
  startRoute4: () => void
  startRoute5: () => void
  showBestRoute: () => void
  followVehicle: () => void
  setVehicleMoving: (vehicleMoving: boolean) => void
  setVehicleStoppedMoving: (vehicleStoppedMoving: boolean) => void
}

export default function Options({
  bestRoute,
  follow,
  vehicleMoving,
  vehicleStoppedMoving,
  startRoute1,
  startRoute2,
  startRoute3,
  startRoute4,
  startRoute5,
  showBestRoute,
  followVehicle,
  setVehicleMoving,
  setVehicleStoppedMoving
}: Props) {
  const dispatch = useDispatch()

  const resetRoute = () => {
    setVehicleMoving(false)
    setVehicleStoppedMoving(false)
    dispatch(firstRouteSelect(false))
    dispatch(secondRouteSelect(false))
    dispatch(thirdRouteSelect(false))
    dispatch(fourthRouteSelect(false))
    dispatch(fifthRouteSelect(false))
  }

  return (
    <section className="options__container">
      {vehicleMoving === true ? (
        <div className="options__container__text">
          {vehicleStoppedMoving === false && <p>The vehicle is in motion...</p>}
          {vehicleStoppedMoving && (
            <p>
              The vehicle has reached the final destination. Click 'Reset Route'
              to choose a new route.
            </p>
          )}
          <button className="options__container__button" onClick={resetRoute}>
            Reset Route
          </button>
        </div>
      ) : (
        <>
          <div className="options__container__text">
            <p>Choose one of the routes below.</p>
          </div>
          <div className="options__container__routes">
            <button
              className="options__container__button"
              onClick={startRoute1}
            >
              Start Route 1
            </button>
            <button
              className="options__container__button"
              onClick={startRoute2}
            >
              Start Route 2
            </button>
            <button
              className="options__container__button"
              onClick={startRoute3}
            >
              Start Route 3
            </button>
            <button
              className="options__container__button"
              onClick={startRoute4}
            >
              Start Route 4
            </button>
            <button
              className="options__container__button"
              onClick={startRoute5}
            >
              Start Route 5
            </button>
          </div>
        </>
      )}

      <div className="options__container__settings">
        <button className="options__container__button" onClick={showBestRoute}>
          {bestRoute ? <>Hide Best Route</> : <>Show Best Route</>}
        </button>

        <button className="options__container__button" onClick={followVehicle}>
          {follow ? (
            <>Disable Vehicle Tracking</>
          ) : (
            <>Enable Vehicle Tracking</>
          )}
        </button>
      </div>
    </section>
  )
}
