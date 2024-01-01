import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  search: {
    query: '',
    ip: '60.251.149.199',
    location: 'Taipei, Taiwan',
    timezone: 'UTC +08:00',
    isp: 'Chungwha Telecom',
    latitude: 25.047,
    longitude: 121.5319
  },

}

const url = `http://ip-api.com/json/60.251.149.199`

// THUNK
const getGeoLocation = createAsyncThunk('geolocation/getGeoLocation',
  async (_, thunkAPI) => {

    try {
      console.log('Component Data Payload', _)
      console.log('Thunk Data', thunkAPI)
      console.log('Thunk Data State', thunkAPI.getState())

      const response = await fetch(url)

      const data = await response.json()

      console.log("apidata",data)

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
      console.log('new state=>', state.search)
      state.search['ip'] = payload.inputValue
    },

    handleSubmit: (state, action) => {
      console.log('search value is', state.search)
    }

  }
})

export { getGeoLocation }
export default geoLocationSlice.reducer
export const { handleChange } = geoLocationSlice.actions
