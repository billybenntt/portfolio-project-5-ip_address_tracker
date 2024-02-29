import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getDataFromLocalStorage, addDataToLocalStorage, removeDataFromLocalStorage} from '../../utils/localStorage.ts'
import ProcessQuery from "../../utils/processQuery.ts";
import {RootState} from "../../store/store.ts";
import {GeolocationState} from "../../types/app"

/// INITIAL STATE
const initialState: GeolocationState = {
    isLoading: false,
    query: "",
    search: {
        ip: '',
        isp: "",
        latitude: 25.047,
        longitude: 121.5319,
        country: "",
        timezone: ""
    }
}


// THUNK 1 - GET USER GEOLOCATION FROM LOCAL IP
const getGeoLocation = createAsyncThunk('geolocation/getGeoLocation',
    async (_, thunkAPI) => {

        const urlEndpoint = import.meta.env.VITE_ENDPOINT

        try {
            const storedData = getDataFromLocalStorage('ip')

            if (!storedData) {
                const response = await fetch(urlEndpoint)

                const newData = await response.json()
                console.log(newData)


                addDataToLocalStorage(newData)
                return newData
            }
            return storedData

        } catch (e) {
            return thunkAPI.rejectWithValue("Failed to get user's IP address")
        }
    })

// THUNK 2 - GET USER GEOLOCATION FROM SEARCH IP
const searchGeoLocation = createAsyncThunk('geolocation/searchGeoLocation', async (_, thunkAPI) => {
    try {

        const state = thunkAPI.getState() as RootState
        const urlEndpoint = import.meta.env.VITE_ENDPOINT
        const result = await ProcessQuery(state.geolocation.query)
        if (result.type !== 'invalid') {
            const response = await fetch(urlEndpoint + `&ip_address=${result.ip}`)
            const newData = await response.json()
            removeDataFromLocalStorage()
            addDataToLocalStorage(newData)
            return newData
        }

        return []
    } catch (error) {
        return thunkAPI.rejectWithValue("Failed to search for given IP address")
    }
})


const geoLocationSlice = createSlice({
    name: 'geolocation',
    initialState,
    reducers: {
        handleChange: (state, {payload}) => {
            const {inputValue} = payload
            state.query = inputValue
        },
        clearData: (state) => {
            state.isLoading = initialState.isLoading
            state.search = initialState.search
        }
    },

    extraReducers: (builder) => {
        builder.addCase(searchGeoLocation.pending, (state) => {
            state.isLoading = true
        }).addCase(searchGeoLocation.fulfilled, (state, {payload}) => {
            const {ip_address, connection, latitude, longitude, country, timezone: {name}} = payload
            state.isLoading = false
            state.search.ip = ip_address
            state.search.isp = connection.isp_name
            state.search.latitude = latitude
            state.search.longitude = longitude
            state.search.country = country
            state.search.timezone = name
        }).addCase(searchGeoLocation.rejected, (state) => {
            state.isLoading = false
        }).addCase(getGeoLocation.pending, (state) => {
            state.isLoading = true
        }).addCase(getGeoLocation.fulfilled, (state, {payload}) => {
            const {ip_address, connection, latitude, longitude, country, timezone: {name}} = payload
            state.isLoading = false
            state.search.ip = ip_address
            state.search.isp = connection.isp_name
            state.search.latitude = latitude
            state.search.longitude = longitude
            state.search.country = country
            state.search.timezone = name
        }).addCase(getGeoLocation.rejected, (state) => {
            state.isLoading = false
            state.search.ip = "0.0.0.0"
            state.search.isp = "Unknown"
            state.search.latitude = 0.000
            state.search.longitude = 0.000
            state.search.country = "Taiwan"
            state.search.timezone = "Asia/Taipei"
        })
    },

})

export {getGeoLocation, searchGeoLocation}
export default geoLocationSlice.reducer
export const {handleChange} = geoLocationSlice.actions
