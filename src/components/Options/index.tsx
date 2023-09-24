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
  setRoutes1Start: (routes1Start: boolean) => void
  setRoutes2Start: (routes2Start: boolean) => void
  setRoutes3Start: (routes3Start: boolean) => void
  setRoutes4Start: (routes4Start: boolean) => void
  setRoutes5Start: (routes5Start: boolean) => void
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
  setRoutes1Start,
  setRoutes2Start,
  setRoutes3Start,
  setRoutes4Start,
  setRoutes5Start,
  setVehicleStoppedMoving
}: Props) {
  const resetRoute = () => {
    setVehicleMoving(false)
    setVehicleStoppedMoving(false)
    setRoutes1Start(false)
    setRoutes2Start(false)
    setRoutes3Start(false)
    setRoutes4Start(false)
    setRoutes5Start(false)
  }

  return (
    <section className="options__container">
      {vehicleMoving === true ? (
        <div className="options__container__text">
          {vehicleStoppedMoving === false && (
            <p>O veículo está em movimento...</p>
          )}
          {vehicleStoppedMoving && (
            <p>
              O veículo chegou ao destino final. Clique em "resetar rota" para
              escolher uma nova rota.
            </p>
          )}
          <button className="options__container__button" onClick={resetRoute}>
            Resetar rota
          </button>
        </div>
      ) : (
        <>
          <div className="options__container__text">
            <p>Escolha uma das rotas abaixo.</p>
          </div>
          <div className="options__container__routes">
            <button
              className="options__container__button"
              onClick={startRoute1}
            >
              Iniciar rota 1
            </button>
            <button
              className="options__container__button"
              onClick={startRoute2}
            >
              Iniciar rota 2
            </button>
            <button
              className="options__container__button"
              onClick={startRoute3}
            >
              Iniciar rota 3
            </button>
            <button
              className="options__container__button"
              onClick={startRoute4}
            >
              Iniciar rota 4
            </button>
            <button
              className="options__container__button"
              onClick={startRoute5}
            >
              Iniciar rota 5
            </button>
          </div>
        </>
      )}

      <div className="options__container__settings">
        <button className="options__container__button" onClick={showBestRoute}>
          {bestRoute ? <>Esconder melhor rota</> : <>Exibir melhor rota</>}
        </button>

        <button className="options__container__button" onClick={followVehicle}>
          {follow ? (
            <>Desabilitar seguir veículo</>
          ) : (
            <>Habilitar seguir veículo</>
          )}
        </button>
      </div>
    </section>
  )
}
