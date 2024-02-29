import {configureStore} from '@reduxjs/toolkit'
import geoLocationReducer from '../features/geolocation/geolocationSlice.ts'

export const store = configureStore({
    reducer: {
        geolocation: geoLocationReducer,
    }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {invoices: invoicesState}
export type AppDispatch = typeof store.dispatch


