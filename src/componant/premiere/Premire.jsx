import React, { useState } from 'react'
import premireData from '../../datas/premireData'
import { Button } from 'react-bootstrap';

export default function Premire ()  {

  const [startIndex, setStartIndex] = useState(0);
  const total = premireData.length;
  const cardsPerSlide = 5;
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
    <div className="premireContainer m-auto " style={{width:'100%'}}>

      <div className="premiremovie m-auto " style={{width:'90%'}}>
        <div className="premimg text-light d-flex pt-4 " >
            <div className="b me-5">
                <button className='createbut bg-danger text-light'>O</button>
            </div>
            <div className="primierebut">
              <h5>PREMIERE</h5>
              <p>Watch new movies at home,every Friday</p>
            </div>
         </div>
         <div className="premireMovie1 d-flex align-items-center justify-content-between pt-3 text-light">
            <div className="premireText">
                <h4>Premieres</h4>
                <p>Brand new releases every Friday</p>
            </div>
            <div className="seeAll text-danger">
                <p>See All </p>
            </div>
         </div>
          </div>
          
<div className="m-auto d-none d-md-flex gap-2 position-relative" style={{width:'100%'}}> 
   <div className="carousel-wrapper " >
     <div className="carousel-track" style={{   transform: `translateX(-${startIndex * (100 / cardsPerSlide)}%)` }}>
   
           {  
          premireData.map((m,i)=>(

          <div className=" carousel-card " key={i}   >
             <div className="imgdiv mb-2   ">
                <img src={m.img} alt="" className='card-img-top w-100 h-75 '/>
                <div className="cardText text-light ">
                  <h6 className='card-title '>{m.movie_name.length > 18 ? m.movie_name.slice(0,18)+"..." : m.movie_name}</h6>
                  <p className="text ">{(m.languages).join(',')}</p>
             </div>
          </div>
    </div>
      ))
     }
    </div>
   </div>
         {canGoLeft && (
                <Button
                  variant="light"
                  className="carousel-arrow  left"
                  onClick={handleLeft}>
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
      <div className="d-md-none mobile-scroll m-auto mt-3 mb-3 pb-4" style={{width:'95%'}}>
        <div className="d-flex gap-3">
                {premireData.map((movie) => (
                    <img src={movie.img} alt="" style={{ minWidth: "165px" }} key={movie.id}  />
                ))}
        </div>
      </div>
  </div>
 
    </>
  )
}
