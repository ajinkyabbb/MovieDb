// TopRatedSlice.js
import { createSlice } from "@reduxjs/toolkit";

const topRatedSlice = createSlice({
  name: "topRated",
  initialState: {
    url:{},
    value: 0
  },
  reducers: {
    setTopRatedMovies: (state, action)=>{
        state.url = action.payload
    }
  }
});

export const { setTopRatedMovies } = topRatedSlice.actions;
export default topRatedSlice.reducer;
