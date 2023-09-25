import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import {
  changeBestRoute,
  changeFollowVehicle,
  changeVehicleMoving,
  changeVehicleStoppedMoving,
  fifthRouteSelect,
  firstRouteSelect,
  fourthRouteSelect,
  secondRouteSelect,
  thirdRouteSelect
} from '../../store/reducers/vehicleData'
import { RootReducer } from '../../store'

type Props = {
  startFirstRoute: () => void
  startSecondRoute: () => void
  startThirdRoute: () => void
  startFourthRoute: () => void
  startFifthRoute: () => void
}

export default function Options({
  startFirstRoute,
  startSecondRoute,
  startThirdRoute,
  startFourthRoute,
  startFifthRoute
}: Props) {
  const dispatch = useDispatch()

  const { showBestRoute, follow, vehicleMoving, vehicleStoppedMoving } =
    useSelector((state: RootReducer) => state.vehicleData)

  const resetRoute = () => {
    dispatch(changeVehicleMoving(false))
    dispatch(changeVehicleStoppedMoving(false))
    dispatch(firstRouteSelect(false))
    dispatch(secondRouteSelect(false))
    dispatch(thirdRouteSelect(false))
    dispatch(fourthRouteSelect(false))
    dispatch(fifthRouteSelect(false))
  }

  const bestRoute = () => {
    dispatch(changeBestRoute(showBestRoute))
  }

  const followVehicle = () => {
    dispatch(changeFollowVehicle(follow))
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
              onClick={startFirstRoute}
            >
              Start Route 1
            </button>
            <button
              className="options__container__button"
              onClick={startSecondRoute}
            >
              Start Route 2
            </button>
            <button
              className="options__container__button"
              onClick={startThirdRoute}
            >
              Start Route 3
            </button>
            <button
              className="options__container__button"
              onClick={startFourthRoute}
            >
              Start Route 4
            </button>
            <button
              className="options__container__button"
              onClick={startFifthRoute}
            >
              Start Route 5
            </button>
          </div>
        </>
      )}

      <div className="options__container__settings">
        <button className="options__container__button" onClick={bestRoute}>
          {showBestRoute ? <>Hide Best Route</> : <>Show Best Route</>}
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
