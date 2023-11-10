import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

// THUNK

const getGeoLocation = createAsyncThunk('geolocation/getGeoLocation',
  async (name, thunkAPI) => {

    console.log('Component Data Payload', name)
    console.log('Thunk Data', thunkAPI)
    console.log('Thunk Data State', thunkAPI.getState())

  })

// SLICE
const geoLocationSlice = createSlice({
  name: 'geolocation',
  initialState,

  extraReducers: {
    [getGeoLocation.pending]: (state) => {
      state.isLoading = true
    }

  },

  reducers: {}
})

export default geoLocationSlice.reducer
