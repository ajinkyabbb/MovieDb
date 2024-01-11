import { createSlice } from '@reduxjs/toolkit'

const HomePageSlice = createSlice({
  name: 'homepage',
  initialState: {
    url:{},
    value: 0
  },
  reducers: {
    getApiConfiguration: (state, action)=>{
        state.url = action.payload
    }
  }
 
})

export const { getApiConfiguration } = HomePageSlice.actions

export default HomePageSlice.reducer