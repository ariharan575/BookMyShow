import React, { useContext, useState } from "react";
import { locContext } from "../App";
import { Carousel } from "../componant/Carousel";
import { Footer } from "../LandingPage/Footer";
import moviesList from "../Datas/movieDetails";
import { Link, useNavigate } from "react-router-dom";

export const AllMovieList = () => {
  const navigate = useNavigate();
  const { location } = useContext(locContext);
  const [searchModal, setSearchModal] = useState(false);

    function handleSearchNavigate(){
    navigate(`/explore/search/${location}`)
  }

  return (
    <>
      {/* HEADER */}
      <div className="container py-3">

        <div className="d-flex justify-content-between align-items-center">
          
          {/* Left Section */}
          <div className="d-flex align-items-center gap-3">
            <i
              className="bi bi-chevron-left fs-4 cursor-pointer"
              onClick={() => navigate(`/explore/home/${location}`)}
              style={{ cursor: "pointer" }}
            ></i>

            <div>
              <h5 className="fw-bold mb-0">Now Showing</h5>
              <small className="text-muted">
                {location} | {moviesList.length} Movies
              </small>
            </div>
          </div>

          {/* Search Icon */}
          <i
            className="bi bi-search fs-4"
            style={{ cursor: "pointer" }}
            onClick={handleSearchNavigate}
          ></i>
        </div>

        <hr />

        {/* Carousel */}
        <Carousel />

      </div>

      {/* MOVIE GRID */}
      <div className="container mb-5">
        <div className="row g-4">

          {moviesList.map((movie) => (
            <div
              key={movie.id}
              className="col-6 col-sm-4 col-md-3 col-lg-2"
            >
              <Link
                to={`/explore/movie/${location}/${movie.movie_name}/${movie.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="card border-0 shadow-sm h-100">

                  <img
                    src={movie.img}
                    alt={movie.movie_name}
                    className="card-img-top"
                    style={{
                      height: "280px",
                      objectFit: "cover",
                    }}
                  />

                  <div className="card-body p-2">
                    <h6 className="fw-semibold small">
                      {movie.movie_name.length > 20
                        ? movie.movie_name.slice(0, 20) + "..."
                        : movie.movie_name}
                    </h6>
                  </div>

                </div>
              </Link>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
};