import React, { useState } from "react";
import premireData from "../Datas/premireData";
import { Button } from "react-bootstrap";

export default function Premire() {
  const [startIndex, setStartIndex] = useState(0);
  const total = premireData.length;
  const cardsPerSlide = 5;

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + cardsPerSlide < total;

  const handleRight = () => {
    if (startIndex + cardsPerSlide >= total - cardsPerSlide) {
      setStartIndex(total - cardsPerSlide);
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
      <div className="premireContainer bg-dark py-4">

        {/* HEADER SECTION */}
        <div className="container text-light">

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-danger rounded-circle fw-bold">
              O
            </button>
            <div>
              <h5 className="mb-0">PREMIERE</h5>
              <small>Watch new movies at home, every Friday</small>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4">
            <div>
              <h4 className="mb-0">Premieres</h4>
              <small>Brand new releases every Friday</small>
            </div>
            <span className="text-danger small" style={{ cursor: "pointer" }}>
              See All
            </span>
          </div>

        </div>

        {/* DESKTOP CAROUSEL */}
        <div className="container mt-4 position-relative d-none d-md-block">

          <div className="overflow-hidden">

            <div
              className="d-flex"
              style={{
                transform: `translateX(-${
                  startIndex * (100 / cardsPerSlide)
                }%)`,
                transition: "0.5s ease",
              }}
            >
              {premireData.map((m, i) => (
                <div
                  key={i}
                  className="px-2"
                  style={{ minWidth: `${100 / cardsPerSlide}%` }}
                >
                  <div className="bg-dark rounded-3">
                    <img
                      src={m.img}
                      alt=""
                      className="w-100 rounded-3"
                      style={{ height: "260px", objectFit: "cover" }}
                    />
                    <div className="mt-2 text-light">
                      <h6>
                        {m.movie_name.length > 18
                          ? m.movie_name.slice(0, 18) + "..."
                          : m.movie_name}
                      </h6>
                      <small className="text-secondary">
                        {Array.isArray(m.languages)
                          ? m.languages.join(", ")
                          : m.languages}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* LEFT ARROW */}
          {canGoLeft && (
            <Button
              variant="light"
              className="position-absolute top-50 start-0 translate-middle-y rounded-circle shadow"
              onClick={handleLeft}
            >
              <i className="bi bi-chevron-left"></i>
            </Button>
          )}

          {/* RIGHT ARROW */}
          {canGoRight && (
            <Button
              variant="light"
              className="position-absolute top-50 end-0 translate-middle-y rounded-circle shadow"
              onClick={handleRight}
            >
              <i className="bi bi-chevron-right"></i>
            </Button>
          )}
        </div>

        {/* MOBILE SCROLL */}
        <div
          className="d-md-none container mt-4"
          style={{ overflowX: "auto" }}
        >
          <div className="d-flex gap-3">
            {premireData.map((movie) => (
              <div key={movie.id} style={{ minWidth: "170px" }}>
                <img
                  src={movie.img}
                  alt=""
                  className="w-100 rounded-3"
                  style={{ height: "230px", objectFit: "cover" }}
                />
                <h6 className="text-light mt-2 small">
                  {movie.movie_name}
                </h6>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}