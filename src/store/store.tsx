import {configureStore} from '@reduxjs/toolkit'
import modalReducer from '../features/modal/modalSlice.jsx'
import geoLocationReducer from '../features/geolocation/geolocationSlice.jsx'

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        geolocation: geoLocationReducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {invoices: invoicesState}
export type AppDispatch = typeof store.dispatch


