import React from 'react'
import { Provider } from 'react-redux'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactDOM from 'react-dom/client'

import { store } from './store/index'

import App from './App.tsx'
import './css/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
