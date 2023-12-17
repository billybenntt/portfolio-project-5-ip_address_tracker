import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  search: '',
}

const url = `http://ip-api.com/json/60.251.149.199`

// THUNK
const getGeoLocation = createAsyncThunk('geolocation/getGeoLocation',
  async (name, thunkAPI) => {

    try {
      console.log('Component Data Payload', name)
      console.log('Thunk Data', thunkAPI)
      console.log('Thunk Data State', thunkAPI.getState())


    //   Call api here

    } catch (e) {
      return thunkAPI.rejectWithValue('There was an error')

    }

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
    handleChange: (state, action) => {
      const { payload } = action
      console.log("new state=>",state.search)
      state.search = payload.inputValue
    },

    handleSubmit: (state, action) => {
      console.log('search value is', state.search)
    }

  }
})

export default geoLocationSlice.reducer
export const { handleChange } = geoLocationSlice.actions
