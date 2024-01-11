import { createSlice } from '@reduxjs/toolkit'

const castDetailSlice = createSlice({
  name: 'castDetail',
  initialState: {
    cast:{},
    value: 0
  },
  reducers: {
    getCastDetail: (state, action)=>{
        state.cast = action.payload
    }
  }
 
})

export const { getCastDetail } =castDetailSlice.actions

export default castDetailSlice.reducer