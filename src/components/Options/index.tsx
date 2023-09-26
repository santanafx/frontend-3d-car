import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

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
  const {
    t,
    i18n: { changeLanguage, language }
  } = useTranslation()

  const dispatch = useDispatch()

  const { showBestRoute, follow, vehicleMoving, vehicleStoppedMoving } =
    useSelector((state: RootReducer) => state.vehicleData)

  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)
  }

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
          {vehicleStoppedMoving === false && <p>{t('vehicleInMotion')}</p>}
          {vehicleStoppedMoving && <p>{t('vehicleStatus')}</p>}
          <button className="options__container__button" onClick={resetRoute}>
            {t('resetRoute')}
          </button>
        </div>
      ) : (
        <>
          <div className="options__container__text">
            <p>{t('chooseRouteBelow')}</p>
          </div>
          <div className="options__container__routes">
            <button
              className="options__container__button"
              onClick={startFirstRoute}
            >
              {t('startRoute1')}
            </button>
            <button
              className="options__container__button"
              onClick={startSecondRoute}
            >
              {t('startRoute2')}
            </button>
            <button
              className="options__container__button"
              onClick={startThirdRoute}
            >
              {t('startRoute3')}
            </button>
            <button
              className="options__container__button"
              onClick={startFourthRoute}
            >
              {t('startRoute4')}
            </button>
            <button
              className="options__container__button"
              onClick={startFifthRoute}
            >
              {t('startRoute5')}
            </button>
          </div>
        </>
      )}

      <div className="options__container__settings">
        <button className="options__container__button" onClick={bestRoute}>
          {showBestRoute ? (
            <>{t('hideBestRoute')}</>
          ) : (
            <>{t('showBestRoute')}</>
          )}
        </button>

        <button className="options__container__button" onClick={followVehicle}>
          {follow ? (
            <>{t('disableVehicleTracking')}</>
          ) : (
            <>{t('enableVehicleTracking')}</>
          )}
        </button>
      </div>
      <div className="options__container__language">
        <button
          className="options__container__button"
          onClick={handleChangeLanguage}
        >
          {t('changeLanguage')}
        </button>
      </div>
    </section>
  )
}
