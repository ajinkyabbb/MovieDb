import { createSlice } from "@reduxjs/toolkit";

const upcomingMoviesSlice = createSlice({
  name: "upcomingMovies",
  initialState: {
    url: {},
    
  },
  reducers: {
    setUpcomingMovies: (state, action) => {
      state.url = action.payload;
    },
  },
});

export const { setUpcomingMovies } = upcomingMoviesSlice.actions;
export default upcomingMoviesSlice.reducer;
