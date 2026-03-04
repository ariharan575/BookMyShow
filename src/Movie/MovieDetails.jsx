import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import moviesList from "../Datas/movieDetails";
import { Link } from "react-router-dom";

const cardsPerSlide = 5;
const movies = moviesList.slice(0, 13);

const Movie = () => {
  const [startIndex, setStartIndex] = useState(0);
  const total = movies.length;

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + cardsPerSlide < total;

  const handleRight = () => {
    if (startIndex + cardsPerSlide >= total - 3) {
      setStartIndex(Math.max(total - 5, 0));
    } else {
      setStartIndex(startIndex + cardsPerSlide);
    }
  };

  const handleLeft = () => {
    if (startIndex - cardsPerSlide <= 0) {
      setStartIndex(0);
    } else {
      setStartIndex(startIndex - cardsPerSlide);
    }
  };

  return (
    <>
      {/* ================= DESKTOP ================= */}
      <div
        className="movie-carousel-container m-auto p-3 position-relative d-none d-md-block"
        style={{ width: "95%" }}
      >
        <div className="carousel-wrapper overflow-hidden">
          <div
            className="carousel-track d-flex"
            style={{
              transform: `translateX(-${
                startIndex * (100 / cardsPerSlide)
              }%)`,
              transition: "0.5s ease"
            }}
          >
            {movies.map((movie) => {
              const movieName = movie?.movie_name || "No Title";

              return (
                <div
                  className="carousel-card px-2"
                  key={movie?.id}
                  style={{ minWidth: "20%" }} 
                >
                  <Link
                    to={`/explore/movie/chennai/${movieName}/${movie?.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="bg-white rounded shadow-sm">

                      {/* FIXED IMAGE SIZE */}
                      <img
                        src={movie?.img}
                        alt={movieName}
                        className="w-100"
                        style={{
                          height: "260px",
                          objectFit: "cover",
                          borderTopLeftRadius: "6px",
                          borderTopRightRadius: "6px"
                        }}
                      />

                      <div className="p-2">
                        <h6 className="mb-1">
                          {movieName.length > 15
                            ? movieName.slice(0, 15) + "..."
                            : movieName}
                        </h6>

                        <p className="small text-muted mb-0">
                          {Array.isArray(movie?.movie_format)
                            ? movie.movie_format.join(" , ")
                            : ""}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {canGoLeft && (
          <Button
            variant="light"
            className="carousel-arrow left"
            onClick={handleLeft}
          >
            <i className="bi bi-chevron-left"></i>
          </Button>
        )}

        {canGoRight && (
          <Button
            variant="light"
            className="carousel-arrow right"
            onClick={handleRight}
          >
            <i className="bi bi-chevron-right"></i>
          </Button>
        )}
      </div>

      {/* ================= MOBILE ================= */}
      <div
        className="d-md-none p-3 mobile-scroll m-auto"
        style={{ width: "95%" }}
      >
        <div className="d-flex gap-3 overflow-auto pb-2">
          {movies.map((movie) => {
            const movieName = movie?.movie_name || "No Title";

            return (
              <Card
                key={movie?.id}
                style={{ minWidth: "165px" }}
                className="border-0 shadow-sm"
              >
                <Card.Img
                  src={movie?.img}
                  style={{
                    height: "220px",
                    objectFit: "cover"
                  }}
                />

                <Card.Body className="p-2">
                  <Card.Title className="fs-6 mb-1">
                    {movieName.length > 15
                      ? movieName.slice(0, 15) + "..."
                      : movieName}
                  </Card.Title>

                  <Card.Text className="text-muted small mb-0">
                    {Array.isArray(movie?.movie_format)
                      ? movie.movie_format.join(" , ")
                      : ""}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Movie;