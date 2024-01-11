import "./App.css";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TopRatedPage from "./pages/TopRatedPage";
import UpComingMoviePage from "./pages/UpComingMoviePage";
import SingleMovieDetail from "./pages/SingleMovieDetail";
import Search from "./components/Search";
import SearchResultsPage from "./pages/SearchResultsPage";
import { useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/HomePageSlice";
import { setTopRatedMovies } from "./store/topRatedSlice";
import { setUpcomingMovies } from "./store/upcomingMovieSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import usePagination from "./hooks/usePagination";
const KEY = "c45a857c193f6302f2b5061c3b85e743";
function App() {
  const { url } = useSelector((state) => state.homepage);
  // console.log(url.total_pages);
  const {
    pageId,
    nextPaginationHandler,
    prevPaginationHandler,
  } = usePagination(1, url.total_pages);

  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMovies() {
      try {
        const [popularResponse] =
          await Promise.all([
            fetch(
              `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=en-US&page=${pageId}`
            ),
            
          ]);
        const [popularData] = await Promise.all([
          popularResponse.json(),
         
        ]);

        if (
          !popularResponse.ok 
        ) {
          throw new Error("Something went wrong with fetching movies");
        }
        dispatch(getApiConfiguration(popularData));
        // console.log(popularData)
      } catch (err) {
        if (err.name !== "AboutError") {
          console.log(err.message);
        }
      }
    }
    fetchMovies();
  }, [dispatch,pageId]);
  return (
    <Router>
      <div className="App">
        <NavBar>
          <Search />
        </NavBar>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
              nextPaginationHandler={nextPaginationHandler}
              prevPaginationHandler={prevPaginationHandler}
              pageId={pageId}
              />
            }
          />
          <Route path="/TopRatedPage" element={<TopRatedPage />} />
          <Route path="/UpComingMoviePage" element={<UpComingMoviePage />} />
          <Route path="/movie/:id" element={<SingleMovieDetail />} />
          <Route path="/search/:query" element={<SearchResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
