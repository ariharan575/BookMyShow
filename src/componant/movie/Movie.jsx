import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import moviesList from '../../datas/movieDetails'
import './movie.css'
import { Link } from "react-router-dom";
import { Event } from "../event/Event";

const cardsPerSlide = 5;
const movies = moviesList.slice(0,13);

const Movie = () => {
  const [startIndex, setStartIndex] = useState(0);
  const total = movies.length;
  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + cardsPerSlide < total;

  const handleRight = () => {
    if (startIndex + cardsPerSlide >= total - 3) {
      setStartIndex(total - 5);
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
    <div className="movie-carousel-container m-auto position-relative d-none d-md-block " style={{width:'95%'}}>
      {/* Carousel View */}
      <div className="carousel-wrapper " >
        <div className="carousel-track" style={{   transform: `translateX(-${startIndex * (100 / cardsPerSlide)}%)` }}>
          {movies.map((movie) => (
            <div className="carousel-card" key={movie.id}><Link to={`/explore/movie/chennai/${movie.movie_name}/${movie.id}`} className="link">
              <div className=" border-0 py-3 ">
                <img src={movie.img} className="w-100 h-75"/>
                <div className="ps-2 pt-2">
                  <h5 className="fs-6 mb-2">{movie.movie_name.length > 15 ? movie.movie_name.slice(0,15) + "..." : movie.movie_name}</h5>
                  <p className="small">{movie.movie_format.join(" , ")}</p>
                </div>
              </div>        
            </Link></div>
          ))}
        </div>
      </div>
      {/* Left arrow */}
      {canGoLeft && (
        <Button
          variant="light"
          className="carousel-arrow  left"
          onClick={handleLeft}
        >
        <i className="bi bi-chevron-left"></i>
        </Button>
      )}

      {/* Right arrow */}
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
          {/* Mobile scroll view */}
      <div className="d-md-none  mobile-scroll m-auto" style={{width:'95%'}}>
        <div className="d-flex gap-3">
          {movies.map((movie) => (
            <Card key={movie.id} style={{ minWidth: "165px", height:'100%' }}>
              <Card.Img src={movie.img}></Card.Img>
              <Card.Body>
                <Card.Title className="fs-6 mb-2">{movie.movie_name.length > 15 ? movie.movie_name.slice(0,15) + "..." : movie.movie_name}</Card.Title>
                <Card.Text className="text-muted small">{movie.movie_format.join(",")}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
       {/* <Event/> */}
      </>
  );
};

export default Movie;



