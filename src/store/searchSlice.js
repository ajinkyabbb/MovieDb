import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    url:{}
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
      state.url = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
