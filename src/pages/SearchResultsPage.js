import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setSearchQuery } from "../store/searchSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import usePagination from "../hooks/usePagination";
const SearchResultsPage = () => {
    const KEY = "c45a857c193f6302f2b5061c3b85e743";
    const dispatch = useDispatch()
  const { query } = useParams();

  const navigate = useNavigate()
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  const {url} = useSelector((state) => state.search);
  console.log(url)
  const {
    pageId,
    nextPaginationHandler,
    prevPaginationHandler,
  } = usePagination(1, url.total_pages);
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${query}&page=${pageId}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong with fetching movie details");
        }
        const data = await res.json();
        dispatch(setSearchQuery(data));
        if (data.Response === "False") {
          throw new Error("Movie not found");
        }
      } catch (err) {
      } finally {
      }
    }
    if (query) {
      fetchMovieDetails();
    }
    return () => {};
  }, [query,pageId]);

  return (
    <div className="mt-5">
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {url.results &&
        url.results.map((movie, index) => (
          

          <div 
          onClick={()=>{handleMovieClick(movie.id)}}
          key={index} className="card border-0" style={{ width: "18rem" }}>
            <img
            
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h5 className="card-title text-white">{movie.original_title}</h5>
              <p className="card-text text-white">
                {movie.vote_average}
              </p>
              
          </div>
      
        ))}
    </div>

      <div className="d-flex mt-4 justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              onClick={prevPaginationHandler}
              className={`page-item ${pageId === 1 ? "disabled" : ""}`}
            >
              <a className="page-link" href="#">
                Previous
              </a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#">
                {pageId}
              </a>
            </li>

            <li
             onClick={nextPaginationHandler} 
             className={`page-item ${pageId === url.total_pages ? "disabled" : ""}`}>
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
  </div>
  );
};

export default SearchResultsPage;
