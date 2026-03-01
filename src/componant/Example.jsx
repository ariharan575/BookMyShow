import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { outDoorData } from '../datas/allData'
import { therepyData } from '../datas/allData'
import { popularData } from '../datas/allData'
import { LastPlayData } from '../datas/allData'
import { topGameData } from '../datas/allData' 
import {studioData} from "../datas/allData"
import { Link } from "react-router-dom";



const Example = ({data,title}) => {
  const cardsPerSlide = 5;
   const movies = data;
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
        <h4>{title}</h4>
        <div className="carousel-track" style={{   transform: `translateX(-${startIndex * (100 / cardsPerSlide)}%)` }}>
          {movies.map((movie,index) => (
            <div className="carousel-card" key={index}><Link to={`/explore/movie/chennai/${movie.movie_name}/${movie.id}`} className="link">
              <div className="shadow-sm border-0 py-3 ">
                <img src={movie.img} className="w-100 h-75"/>
                <div className="ps-2 pt-2">
                  <h5 className="fs-6 mb-2">{movie.name}</h5>
                  <p className="small">{movie.address.join(" , ")}</p>
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
          {movies.map((movie,index) => (
            <div key={index} style={{ minWidth: "165px", height:'100%' }}>
              <img src={movie.img} alt="" className="w-100" />
              <div>
                <h5 className="fs-6 mb-2">{movie.name}</h5>
                <p className="text-muted small">{movie.address}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
       {/* <Event/> */}
      </>
  );
};

const Example1 = () => {
  return (
    <>
        <Example title="Your Music Studio" data={studioData}/>
        <Example title="Outdoor Events" data={outDoorData}/>
        <Example title="Laughter Therapy" data={therepyData}/>
        <Example title="Popular Event" data={popularData}/>
        <Example title="Latest Plays " data={LastPlayData}/>
        <Example title="Top Game & Sport Events" data={topGameData}/>

    </>
  )
}


export default Example1;
