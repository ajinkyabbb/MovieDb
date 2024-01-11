import { useParams } from "react-router-dom";
import useMovies from "../hooks/useMovies";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { setSingleMovieDetail } from "../store/SingleMovieDetailSlice";
import { useDispatch } from "react-redux";
import { getCastDetail } from "../store/castDetailSlice";
const KEY = "c45a857c193f6302f2b5061c3b85e743";

const SingleMovieDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovies() {
      try {
        const [singleMoveResponse, castDetailResponse] = await Promise.all([
          fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=en-US`
          ),
          fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${KEY}&language=en-US`
          ),
        ]);
        const [singleMoveData, castDetailData] = await Promise.all([
          singleMoveResponse.json(),
          castDetailResponse.json(),
        ]);

        if (!singleMoveResponse || !castDetailResponse) {
          throw new Error("Something went wrong with fetching movies");
        }
        dispatch(setSingleMovieDetail(singleMoveData));
        dispatch(getCastDetail(castDetailData));
      } catch (err) {
        if (err.name !== "AboutError") {
          console.log(err.message);
        }
      }
    }
    fetchMovies();
  }, [dispatch]);

  const { url } = useSelector((state) => state.singleMovieDetail);
  const { cast } = useSelector((state) => state.castDetail);
  // console.log(url);
  // console.log(cast);

  const dateObject = new Date(url.release_date);
  
  const dayOfWeek = dateObject.toLocaleString('en-US', { weekday: 'short' }); // Full day of the week name
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString('en-US', { month: 'short' }); // Full month name
  const year = dateObject.getFullYear();
  
  const formattedDate = `${dayOfWeek} ${day} ${month} ${20} ${year}`;
  

  return (
    <div className="p-3">
      <div className="singleMovie-inner d-flex text-white">
        <div
          className="card singlePageCard border-0 mb-3 text-start"
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${url.poster_path}`} 
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className=" text-white">{url.original_title}</h5>
                <p className=" text-white">Rating: {url.vote_average}</p>
                <span className="text-white">{url.runtime} min</span>{" "}
                <span>
                  {url.genres &&
                    url.genres.map((gen, index) => (
                      <span key={index} className="text-white">
                        {gen.name}
                        {`,`}
                      </span>
                    ))}
                </span>
                <p className=" text-white">{formattedDate }</p>
                <p className="card-text"></p>
              </div>
            </div>
            <h2 className="ps-3  text-white">Overview</h2>
            <p className="card-text ps-3 text-white">{url.overview}</p>
          </div>
        </div>
        <div

          className="banner p-1 d-flex align-items-center"
        
        >
          <img 
         
          src={`https://image.tmdb.org/t/p/w500/${url.backdrop_path}`}
          />
        </div>
      </div>

      <div>
        <div>
          <h3 className="text-start">Cast</h3>
        </div>
        <div>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {cast.cast &&
              cast.cast.map((per, index) => (
                <div
                  key={index}
                  className="card border-0"
                  style={{ width: "10rem" }}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${per.profile_path}`}
                  />
                  <h5 className="card-title text-white">{per.name}</h5>
                  <p className="card-text text-white">Character: {per.character }</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovieDetail;
