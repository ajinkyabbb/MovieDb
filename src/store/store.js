import { configureStore } from "@reduxjs/toolkit";
import HomePageSlice from "./HomePageSlice";
import topRatedSlice from "./topRatedSlice";
import upcomingMovieSlice from "./upcomingMovieSlice";
import SingleMovieDetailSlice from "./SingleMovieDetailSlice";
import searchSlice from "./searchSlice";
import castDetailSlice from "./castDetailSlice";
export const store = configureStore({
    reducer: {
        homepage : HomePageSlice,
        topRated : topRatedSlice,
        upcomingMovies : upcomingMovieSlice,
        singleMovieDetail : SingleMovieDetailSlice,
        search: searchSlice,
        castDetail: castDetailSlice,
    },
})

