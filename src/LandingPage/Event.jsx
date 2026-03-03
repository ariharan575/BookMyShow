import React,{useState}from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const FirstAdd = () =>{

  return (
    <div className="imgContainer m-auto  " style={{width:'100%'}} >
      <img src="/imges/thirdAd.jpg" alt=""  style={{width:'100%'}}/>
   </div>
  )
}

export const Event = () => {

    const imgDiv = [
    {id:1,"img":"/imges/box1.jpg"},
    {id:2,"img":"/imges/box2.jpg"},
    {id:3,"img":"/imges/box3.jpg"},
    {id:4,"img":"/imges/box4.jpg"},
    {id:5,"img":"/imges/box5.jpg"},
    {id:6,"img":"/imges/box1.jpg"},
    {id:7,"img":"/imges/box5.jpg"},
    {id:8,"img":"/imges/box3.jpg"},
    {id:9,"img":"/imges/box4.jpg"},
    {id:10,"img":"/imges/box2.jpg"},
    {id:11,"img":"/imges/box4.jpg"},
  ]
  const imgDiv1 = imgDiv.slice(0,5)
  const imgDiv2 = imgDiv.slice(6,11)
    
const cardsPerSlide = 5;

    const [startIndex, setStartIndex] = useState(0);
    const total = imgDiv.length;
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
     <FirstAdd/>

       <div className="carousel-wrapper d-none d-md-block m-auto position-relative" style={{width:'95%'}} >
        <div className="carousel-track" style={{  transform: `translateX(-${startIndex * (100 / cardsPerSlide)}%)`}}>
          {imgDiv.map((img) => (
            <div className="carousel-card border-0 py-3 " key={img.id}>
                <img src={img.img} className="w-100"/>                
             </div>
          ))}

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

          <div className="mobile-scroll d-md-none m-auto">
              <div className=" m-auto mt-3 mb-3" style={{width:'95%'}}>
              <div className="d-flex gap-3">
                {imgDiv1.map((movie) => (
                    <img src={movie.img} alt="" style={{ minWidth: "165px" }} key={movie.id} />
                ))}
              </div>
            </div>
            
            <div className=" m-auto mt-3 mb-3" style={{width:'95%'}}>
              <div className="d-flex gap-3">
                {imgDiv2.map((movie) => (
                    <img src={movie.img} alt="" style={{ minWidth: "165px" }} key={movie.id} />
                ))}
              </div>
            </div>
          </div>

    
    </>
  )
}
