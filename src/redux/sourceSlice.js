import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
const GOOGLE_MAP_API_KEY = ''

const initialState = {
  entities: undefined || {},
  loading: false,
}

// export const getSource = createAsyncThunk(
//   //action type string
//   'source/getSource',
//   // callback function
//   async (thunkAPI) => {
//     const res = await fetch(`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`)
//     .then((data) => data.json()
//     .then.apply()
//   )
//   return res
// })

  const sourceSlice = createSlice({
  name: 'source',
  initialState,
  reducers: {},
  // extraReducers: {
  //   [getSource.pending]: (state) => {
  //     state.loading = true
  //   },
  //   [getSource.fulfilled]: (state, { payload }) => {
  //     state.loading = false
  //     state.entities = payload
  //   },
  //   [getSource.rejected]: (state) => {
  //     state.loading = false
  //   },
  // },
})

export default sourceSlice.reducer
