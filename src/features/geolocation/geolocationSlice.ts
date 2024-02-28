import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getDataFromLocalStorage, addDataToLocalStorage} from '../../utils/localStorage.ts'


/// INITIAL STATE
const initialState: any = {
    isLoading: false,
    query: "",
    search: {
        ip: '',
        isp: "",
        latitude: 25.047,
        longitude: 121.5319,
        city: "",
        country: "",
        timezone: ""
    }
}


// THUNK 1 - GET USER GEOLOCATION FROM LOCAL IP
const getGeoLocation = createAsyncThunk('geolocation/getGeoLocation',
    async (_, thunkAPI) => {

        const urlEndpoint = import.meta.env.VITE_ENDPOINT

        console.log("urlEndpoint", urlEndpoint)

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
            const {inputName, inputValue} = payload
            state[inputName] = inputValue
        },
        clearData: (state) => {
            state.isLoading = initialState.isLoading
            state.search = initialState.search
        }
    },

    extraReducers: (builder) => {
        builder.addCase(searchGeoLocation.pending, (state) => {
            state.isLoading = true
        }).addCase(searchGeoLocation.fulfilled, (state) => {
            state.isLoading = false
        }).addCase(searchGeoLocation.rejected, (state) => {
            state.isLoading = false
        }).addCase(getGeoLocation.pending, (state) => {
            state.isLoading = true
        }).addCase(getGeoLocation.fulfilled, (state, {payload}) => {
            const {query, isp, lat, lon, city, country, timezone} = payload
            state.isLoading = false
            state.search.ip = query
            state.search.isp = isp
            state.search.latitude = lat
            state.search.longitude = lon
            state.search.city = city
            state.search.country = country
            state.search.timezone = timezone
        }).addCase(getGeoLocation.rejected, (state) => {
            state.isLoading = false
            state.search.ip = "0.0.0.0"
            state.search.isp = "Unknown"
            state.search.latitude = 0.000
            state.search.longitude = 0.000
            state.search.city = "Taipei"
            state.search.country = "Taiwan"
            state.search.timezone = "Asia/Taipei"
        })
    },

})

export {getGeoLocation, searchGeoLocation}
export default geoLocationSlice.reducer
export const {handleChange, clearData} = geoLocationSlice.actions
