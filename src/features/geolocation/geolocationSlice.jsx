import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDataToLocalStorage, getDataFromLocalStorage } from '../../utils/localStorage.js'
import { LiaObjectGroup } from 'react-icons/lia'

const initialState = {
  isLoading: false,
  search: {
    query: '',
    ip: '60.251.149.222',
    country: 'Taiwan',
    city: 'Taipei',
    offset: '28000',
    isp: 'Chungwha Telecom',
    lat: 25.047,
    lon: 121.5319
  }
}

// THUNK
const getGeoLocation = createAsyncThunk('geolocation/getGeoLocation',
  async (_, thunkAPI) => {
    try {
      const { geolocation: { search: { query } } } = thunkAPI.getState()

      console.log(query)
      // const locationResponse = await fetch(`http://ip-api.com/json/${ip}?fields=33579985`)
      // const locationData = await locationResponse.json()
      // const { country, city, lat, lon, offset, isp, query } = locationData
      // const newData = {country, city, lat, lon, offset, isp, query }
      // addDataToLocalStorage(newData)
    } catch (e) {
      return thunkAPI.rejectWithValue('There was an error')
    }
  })

const getAllData = createAsyncThunk('geolocation/getAllData', async (_, thunkAPI) => {
  try {
    const storedData = getDataFromLocalStorage('ip')
    if (!storedData) {
      const ipResponse = await fetch('https://api.ipify.org/?format=json')
      const ipData = await ipResponse.json()
      const { ip } = ipData
      const locationResponse = await fetch(`http://ip-api.com/json/${ip}?fields=33579985`)
      const locationData = await locationResponse.json()
      const { country, city, lat, lon, offset, isp, query } = locationData
      const newData = { ip, country, city, lat, lon, offset, isp, query }
      addDataToLocalStorage(newData)
      return newData
    }
    return storedData
  } catch (error) {
    return thunkAPI.rejectWithValue('There was an error')
  }
})

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
    },
    [getAllData.pending]: (state) => {
      state.isLoading = true
    },
    [getAllData.fulfilled]: (state, { payload }) => {
      state.search = payload
      state.isLoading = false
    },
    [getAllData.rejected]: (state, action) => {
      state.isLoading = true
    }
  },

  reducers: {
    handleChange: (state, action) => {
      const { payload } = action
      console.log('new state=>', state.search)
      state.search['query'] = payload.inputValue
    },
    handleSubmit: (state, action) => {
      console.log('search value is', state.search)
    }
  }
})

export { getGeoLocation, getAllData }
export default geoLocationSlice.reducer
export const { handleChange } = geoLocationSlice.actions
