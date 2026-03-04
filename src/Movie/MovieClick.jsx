import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../LandingPage/Footer";
import movieDetails from "../datas/movieDetails";

const Movie = () => {
  const { movies, id } = useParams();
  const [apiMovie, setApiMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  const localMovie = movieDetails.find(
    (m) => m.movie_name === movies
  );

  const movieFilter = movieDetails.slice(0, 4);

  // Fetch OMDB Movie
  useEffect(() => {
    if (!localMovie && id) {
      setLoading(true);
      fetch(`https://omdbapi.com/?i=${id}&apikey=7f16520e`)
        .then((res) => res.json())
        .then((data) => setApiMovie(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id, localMovie]);

  const movieData = localMovie || apiMovie;

  if (loading) {
    return (
      <div className="h-screen d-flex justify-content-center align-items-center">
        <div className="spinner-border text-danger"></div>
      </div>
    );
  }

  if (!movieData) return null;

  return (
    <>
      {/* HERO SECTION */}
      <div
        className="w-100 text-white"
        style={{
          backgroundImage: `url(${movieData.img || movieData.Poster})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-75">
          <div className="container py-5 d-flex flex-column flex-md-row align-items-center gap-4">

            {/* Poster */}
            <img
              src={movieData.img || movieData.Poster}
              alt=""
              className="rounded-3 shadow"
              style={{ width: "250px" }}
            />

            {/* Details */}
            <div className="flex-grow-1">
              <h2 className="fw-bold">
                {movieData.movie_name || movieData.Title}
              </h2>

              <p className="bg-danger d-inline-block px-3 py-1 rounded">
                 {movieData.rating || movieData.imdbRating} / 10
              </p>

              <p className="mt-3">
                {movieData.time_duration || movieData.Runtime} |{" "}
                {movieData.movie_format || movieData.Genre}
              </p>

              <button className="btn btn-danger mt-3 px-4">
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="container my-5">
        <h4 className="fw-bold mb-3">About</h4>
        <p className="text-muted">
          {movieData.about_movie || movieData.Plot}
        </p>
      </div>

      {/* SUGGESTED MOVIES */}
      <div className="container mb-5">
        <div className="d-flex justify-content-between mb-3">
          <h5>You might also like</h5>
          <span className="text-danger">View All</span>
        </div>

        <div className="row g-3">
          {movieFilter.map((m, i) => (
            <div className="col-6 col-md-3" key={i}>
              <div className="card border-0 shadow-sm h-100">
                <img
                  src={m.img}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-title small fw-semibold">
                    {m.movie_name.length > 18
                      ? m.movie_name.slice(0, 18) + "..."
                      : m.movie_name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Movie;