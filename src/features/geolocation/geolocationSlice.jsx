import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { addDataToLocalStorage, getDataFromLocalStorage } from '../../utils/localStorage.js'
import defaultData from '../../utils/defaultData.js'
import { openModal } from '../modal/modalSlice.jsx'

/// INITIAL STATE
const initialState = {
  isLoading: false,
  search: {
    status: '',
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

// THUNK 2
const getGeoLocation = createAsyncThunk('geolocation/getGeoLocation',
  async (_, thunkAPI) => {
    try {
      const { geolocation: { search: { query } } } = thunkAPI.getState()

      const locationResponse = await fetch(`http://ip-api.com/json/${query}?fields=33579985`)
      const locationData = await locationResponse.json()

      if (locationData.status === 'success') {
        const { country, city, lat, lon, offset, isp, query } = locationData
        const newData = { ip: query, country, city, lat, lon, offset, isp, query }
        addDataToLocalStorage(newData)
        return newData

      } else {

        thunkAPI.dispatch(openModal())

        return defaultData[0]

      }

    } catch (e) {
      return thunkAPI.rejectWithValue('There was an error')
    }
  })

// THUNK 1
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
    [getGeoLocation.fulfilled]: (state, { payload }) => {
      console.log('getGeoLocation Reducer Fulfilled =>', payload)
      state.search = payload
      state.isLoading = false
    },
    [getGeoLocation.rejected]: (state, action) => {
      state.isLoading = false
    },
    [getAllData.pending]: (state) => {
      state.isLoading = true
    },
    [getAllData.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.search = payload
    },
    [getAllData.rejected]: (state, action) => {
      state.isLoading = true
    }
  },

  reducers: {
    handleChange: (state, { payload }) => {
      state.search['query'] = payload.inputValue
    },
    handleSubmit: (state, action) => {
      console.log('Handle Submit Reducer =>', state.search)
      console.log('search value is', state.search)
    }
  }
})

export { getGeoLocation, getAllData }
export default geoLocationSlice.reducer
export const { handleChange } = geoLocationSlice.actions
