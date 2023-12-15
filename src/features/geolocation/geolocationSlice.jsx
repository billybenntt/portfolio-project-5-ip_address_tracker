import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  search: "",
}

const url = `http://ip-api.com/json/60.251.149.199`



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
    },
    [getGeoLocation.fulfilled]: (state, action) => {
      state.isLoading = true
    },
    [getGeoLocation.rejected]: (state, action) => {
      state.isLoading = true
    }

  },

  reducers: {
    handleChange: (state, action) =>{
      console.log("State", state.isLoading)
      console.log("Action", action)

    },





  }
})



export default geoLocationSlice.reducer
export const { handleChange } = geoLocationSlice.actions
