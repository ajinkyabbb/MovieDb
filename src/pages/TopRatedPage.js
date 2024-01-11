import { useDispatch, useSelector } from "react-redux";
import useMovies from "../hooks/useMovies";
import { useNavigate } from "react-router-dom";
import usePagination from "../hooks/usePagination"; 
import { setTopRatedMovies } from "../store/topRatedSlice";
import { useEffect } from "react";
const HomePage = () => {
  const KEY = "c45a857c193f6302f2b5061c3b85e743";
  const { url } = useSelector((state) => state.topRated);
//   console.log(url.results);
const navigate = useNavigate()
const handleMovieClick = (movieId) => {
  navigate(`/movie/${movieId}`);
};
const {
  pageId,
  nextPaginationHandler,
  prevPaginationHandler,
} = usePagination(1, url.total_pages);
const dispatch = useDispatch();
useEffect(() => {
  async function fetchMovieDetails() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US&page=${pageId}`
      );

      if (!res.ok) {
        throw new Error("Something went wrong with fetching movie details");
      }
      const data = await res.json();
      dispatch(setTopRatedMovies(data));
      if (data.Response === "False") {
        throw new Error("Movie not found");
      }
    } catch (err) {
    } finally {
    }
  }
 
    fetchMovieDetails();

  return () => {};
}, [pageId]);

  return (
    <div className="mt-5">
      
      <div
       className="d-flex flex-wrap justify-content-center gap-3">
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

            <li onClick={nextPaginationHandler} className="page-item">
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

export default HomePage;
