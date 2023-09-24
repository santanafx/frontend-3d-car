type Props = {
  routes1Start: boolean
  routes2Start: boolean
  routes3Start: boolean
  routes4Start: boolean
  routes5Start: boolean
  startRoute1: () => void
  startRoute2: () => void
  startRoute3: () => void
  startRoute4: () => void
  startRoute5: () => void
  showBestRoute: () => void
}

export default function Options({
  routes1Start,
  routes2Start,
  routes3Start,
  routes4Start,
  routes5Start,
  startRoute1,
  startRoute2,
  startRoute3,
  startRoute4,
  startRoute5,
  showBestRoute
}: Props) {
  return (
    <section className="options__container__buttonsContainer">
      <div className="options__container__buttonsContainer__routes">
        {!routes1Start &&
          !routes2Start &&
          !routes3Start &&
          !routes4Start &&
          !routes5Start && (
            <>
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
            </>
          )}
      </div>
      <div className="options__container__buttonsContainer__bestRoutes">
        <button
          className="options__container__buttonsContainer__button"
          onClick={showBestRoute}
        >
          Esconder/Exibir melhor rota
        </button>
      </div>
    </section>
  )
}
