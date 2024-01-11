import { createSlice } from "@reduxjs/toolkit";

const singleMovieDetailSlice = createSlice({
  name: "singleMovieDetail",
  initialState: {
    url: {},
    isLoading: false,
    error: "",
  },
  reducers: {
    setSingleMovieDetail: (state, action) => {
      state.url = action.payload;
     
    },
  },
});

export const {
  setSingleMovieDetail
} = singleMovieDetailSlice.actions;

export default singleMovieDetailSlice.reducer;
