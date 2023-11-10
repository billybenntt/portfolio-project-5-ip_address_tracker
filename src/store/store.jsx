import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '../features/modal/modalSlice.jsx'
import geoLocationReducer from '../features/geolocation/geolocationSlice.jsx'

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    geolocation: geoLocationReducer,
  }
})