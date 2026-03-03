import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  outDoorData,
  therepyData,
  popularData,
  LastPlayData,
  topGameData,
  studioData
} from "../Datas/allData";
import { Link } from "react-router-dom";

const Example = ({ data = [], title }) => {
  const cardsPerSlide = 5;
  const movies = Array.isArray(data) ? data : [];
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
      {/* Desktop */}
      <div
        className="movie-carousel-container m-auto position-relative d-none d-md-block"
        style={{ width: "95%" }}
      >
        <div className="carousel-wrapper">
          <h4 className="mb-3">{title}</h4>

          <div
            className="carousel-track d-flex "
            style={{
              transform: `translateX(-${startIndex * (100 / cardsPerSlide)}%)`,
              transition: "0.5s ease"
            }}
          >
            {movies.map((movie, index) => {
              const movieName =
                movie?.name || movie?.movie_name || "No Title";

              return (
                <div
                  className="carousel-card px-2"
                  key={index}
                  style={{ minWidth: "20%" }}
                >
                  <Link
                    to={`/explore/movie/chennai/${movie?.movie_name || movieName}/${movie?.id}`}
                    className="text-decoration-none text-dark"
                  >
                    <div className="shadow-sm border rounded bg-white">

                      <img
                        src={movie?.img}
                        alt={movieName}
                        className="w-100"
                        style={{
                          height: "250px",
                          objectFit: "cover"
                        }}
                      />

                      <div className="p-2">
                        <h6 className="mb-1">
                          {movieName.length > 20
                            ? movieName.slice(0, 20) + "..."
                            : movieName}
                        </h6>

                        <p className="small text-muted mb-0">
                          {Array.isArray(movie?.address)
                            ? movie.address.join(" , ")
                            : movie?.address || ""}
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

      {/* Mobile */}
      <div
        className="d-md-none mobile-scroll m-auto"
        style={{ width: "95%" }}
      >
        <h5 className="mb-3">{title}</h5>

        <div className="d-flex gap-3 overflow-auto pb-2">
          {movies.map((movie, index) => {
            const movieName =
              movie?.name || movie?.movie_name || "No Title";

            return (
              <div key={index} style={{ minWidth: "165px" }}>
                <img
                  src={movie?.img}
                  alt={movieName}
                  className="w-100"
                  style={{
                    height: "220px",
                    objectFit: "cover",
                    borderRadius: "6px"
                  }}
                />
                <div className="mt-2">
                  <h6 className="mb-1">{movieName}</h6>
                  <p className="small text-muted">
                    {Array.isArray(movie?.address)
                      ? movie.address.join(" , ")
                      : movie?.address || ""}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Example1 = () => {
  return (
    <>
      <Example title="Your Music Studio" data={studioData} />
      <Example title="Outdoor Events" data={outDoorData} />
      <Example title="Laughter Therapy" data={therepyData} />
      <Example title="Popular Event" data={popularData} />
      <Example title="Latest Plays" data={LastPlayData} />
      <Example title="Top Game & Sport Events" data={topGameData} />
    </>
  );
};

export default Example1;