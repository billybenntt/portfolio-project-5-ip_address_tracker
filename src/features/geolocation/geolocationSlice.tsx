import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {addDataToLocalStorage, getDataFromLocalStorage} from '../../utils/localStorage.ts'
import defaultData from '../../utils/defaultData.ts'

/// INITIAL STATE
const initialState = {
    isLoading: false,
    search: {
        status: '',
        query: '',
        ip: '60.251.149.222',
        latitude: 25.047,
        longitude: 121.5319
    }
}

// THUNK 1
const getAllData = createAsyncThunk('geolocation/getAllData', async (_, thunkAPI) => {
    try {
        const storedData = getDataFromLocalStorage('ip')
        if (!storedData) {

            return initialState
        }
        return storedData
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an error')
    }
})

// THUNK 2
const getGeoLocation = createAsyncThunk('geolocation/getGeoLocation',
    async (_, thunkAPI) => {
        try {

            return initialState

        } catch (e) {
            return thunkAPI.rejectWithValue('There was an error')
        }
    })

const geoLocationSlice = createSlice({
    name: 'geolocation',
    initialState,
    reducers: {
        handleChange: (state, {payload}) => {
            state.search['query'] = payload.inputValue
        },
        clearData: (state, action) => {
            state.isLoading = initialState.isLoading
            state.search = initialState.search
        }
    },

    extraReducers: (builder) => {
        builder.addCase(getAllData.pending, (state) => {
            console.log('pending', state)
        }).addCase(getAllData.fulfilled, (state, action) => {
            console.log('fulfilled', state)
            console.log('fulfilled', action)
        }).addCase(getAllData.rejected, (state) => {
            console.log('rejected', state)
        })
    },

})

export {getGeoLocation, getAllData}
export default geoLocationSlice.reducer
export const {handleChange, clearData} = geoLocationSlice.actions
