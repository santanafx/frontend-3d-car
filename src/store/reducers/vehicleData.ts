import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type vehicleDataState = {
  firstRouteSelected: boolean
  secondRouteSelected: boolean
  thirdRouteSelected: boolean
  fourthRouteSelected: boolean
  fifthRouteSelected: boolean
  showBestRoute: boolean
  follow: boolean
  vehicleMoving: boolean
  vehicleStoppedMoving: boolean
}

const initialState: vehicleDataState = {
  firstRouteSelected: false,
  secondRouteSelected: false,
  thirdRouteSelected: false,
  fourthRouteSelected: false,
  fifthRouteSelected: false,
  showBestRoute: false,
  follow: false,
  vehicleMoving: false,
  vehicleStoppedMoving: false
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
    },
    changeBestRoute: (state, action: PayloadAction<boolean>) => {
      state.showBestRoute = !action.payload
    },
    changeFollowVehicle: (state, action: PayloadAction<boolean>) => {
      state.follow = !action.payload
    },
    changeVehicleMoving: (state, action: PayloadAction<boolean>) => {
      state.vehicleMoving = action.payload
    },
    changeVehicleStoppedMoving: (state, action: PayloadAction<boolean>) => {
      state.vehicleStoppedMoving = action.payload
    }
  }
})

export const {
  firstRouteSelect,
  secondRouteSelect,
  thirdRouteSelect,
  fourthRouteSelect,
  fifthRouteSelect,
  changeBestRoute,
  changeFollowVehicle,
  changeVehicleMoving,
  changeVehicleStoppedMoving
} = vehicleDataSlice.actions
export default vehicleDataSlice.reducer
