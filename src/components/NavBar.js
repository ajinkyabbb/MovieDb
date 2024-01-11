import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";

const NavBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.length > 3) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light text-white bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand text-white">
          MovieDb
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Popular
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link to="/TopRatedPage" className="nav-link text-white">
                Top Rated
              </Link>
            </li>
            <li className="nav-item text-white">
              <Link to="/UpComingMoviePage" className="nav-link text-white">
                Upcoming
              </Link>
            </li>
          </ul>

          <div className="ms-auto">
            <Search query={query} setQuery={setQuery} />
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
