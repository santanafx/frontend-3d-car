import { useState } from 'react'
import Map from 'react-map-gl'

function App() {
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5
  })

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="mapbox://styles/santanafx/clmquada7053k01qxbeovgszz"
      mapboxAccessToken="pk.eyJ1Ijoic2FudGFuYWZ4IiwiYSI6ImNsbXF1NjJteDAxNDYya3B0dTQ2MjJsZ2oifQ.tPLIEBvbrLmu9ZWsRTbq7A"
      style={{ width: '100vw', height: '100vh' }}
    />
  )
}

export default App
