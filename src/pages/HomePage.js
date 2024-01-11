import { UseSelector, useSelector } from "react-redux";
import useMovies from "../hooks/useMovies";
import { useNavigate } from "react-router-dom";
const HomePage = ({ nextPaginationHandler, prevPaginationHandler, pageId }) => {
  const { url } = useSelector((state) => state.homepage);
  // console.log(url)
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <div className="mt-5">
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {url.results &&
          url.results.map((movie, index) => (
            <div
              onClick={() => {
                handleMovieClick(movie.id);
              }}
              key={index}
              className="card border-0"
              style={{ width: "18rem" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h5 className="card-title text-white">{movie.original_title}</h5>
              <p className="card-text text-white">{movie.vote_average}</p>
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
