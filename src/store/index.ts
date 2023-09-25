import { configureStore } from '@reduxjs/toolkit'

import vehicleDataReducer from './reducers/vehicleData'

export const store = configureStore({
  reducer: {
    vehicleData: vehicleDataReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
