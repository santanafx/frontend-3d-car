import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type vehicleDataState = {
  firstRouteSelected: boolean
  secondRouteSelected: boolean
  thirdRouteSelected: boolean
  fourthRouteSelected: boolean
  fifthRouteSelected: boolean
}

const initialState: vehicleDataState = {
  firstRouteSelected: false,
  secondRouteSelected: false,
  thirdRouteSelected: false,
  fourthRouteSelected: false,
  fifthRouteSelected: false
}

const vehicleDataSlice = createSlice({
  name: 'vehicleData',
  initialState,
  reducers: {
    firstRouteSelect: (state, action: PayloadAction<boolean>) => {
      state.firstRouteSelected = action.payload
    },
    secondRouteSelect: (state, action: PayloadAction<boolean>) => {
      state.secondRouteSelected = action.payload
    },
    thirdRouteSelect: (state, action: PayloadAction<boolean>) => {
      state.thirdRouteSelected = action.payload
    },
    fourthRouteSelect: (state, action: PayloadAction<boolean>) => {
      state.fourthRouteSelected = action.payload
    },
    fifthRouteSelect: (state, action: PayloadAction<boolean>) => {
      state.fifthRouteSelected = action.payload
    }
  }
})

export const {
  firstRouteSelect,
  secondRouteSelect,
  thirdRouteSelect,
  fourthRouteSelect,
  fifthRouteSelect
} = vehicleDataSlice.actions
export default vehicleDataSlice.reducer
