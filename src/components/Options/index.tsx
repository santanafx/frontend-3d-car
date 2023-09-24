type Props = {
  routes1Start: boolean
  routes2Start: boolean
  routes3Start: boolean
  routes4Start: boolean
  routes5Start: boolean
  bestRoute: boolean
  follow: boolean
  startRoute1: () => void
  startRoute2: () => void
  startRoute3: () => void
  startRoute4: () => void
  startRoute5: () => void
  showBestRoute: () => void
  followVehicle: () => void
}

export default function Options({
  routes1Start,
  routes2Start,
  routes3Start,
  routes4Start,
  routes5Start,
  bestRoute,
  follow,
  startRoute1,
  startRoute2,
  startRoute3,
  startRoute4,
  startRoute5,
  showBestRoute,
  followVehicle
}: Props) {
  return (
    <section className="options__container__buttonsContainer">
      {!routes1Start &&
      !routes2Start &&
      !routes3Start &&
      !routes4Start &&
      !routes5Start ? (
        <>
          <div className="options__container__text">
            <p>Escolha uma das rotas abaixo.</p>
          </div>
          <div className="options__container__buttonsContainer__routes">
            <button
              className="options__container__buttonsContainer__button"
              onClick={startRoute1}
            >
              Iniciar rota 1
            </button>
            <button
              className="options__container__buttonsContainer__button"
              onClick={startRoute2}
            >
              Iniciar rota 2
            </button>
            <button
              className="options__container__buttonsContainer__button"
              onClick={startRoute3}
            >
              Iniciar rota 3
            </button>
            <button
              className="options__container__buttonsContainer__button"
              onClick={startRoute4}
            >
              Iniciar rota 4
            </button>
            <button
              className="options__container__buttonsContainer__button"
              onClick={startRoute5}
            >
              Iniciar rota 5
            </button>
          </div>
        </>
      ) : (
        <div className="options__container__text">
          <p>O veículo está em movimento...</p>
        </div>
      )}

      <div className="options__container__buttonsContainer__settings">
        <button
          className="options__container__buttonsContainer__button"
          onClick={showBestRoute}
        >
          {bestRoute ? <>Esconder melhor rota</> : <>Exibir melhor rota</>}
        </button>
        <button
          className="options__container__buttonsContainer__button"
          onClick={followVehicle}
        >
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
