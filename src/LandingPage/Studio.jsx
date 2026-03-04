import React from 'react'
import { studioData } from '../datas/allData'
import { outDoorData } from '../datas/allData'
import { therepyData } from '../datas/allData'
import { popularData } from '../datas/allData'
import { LastPlayData } from '../datas/allData'
import { topGameData } from '../datas/allData'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function OutDoor  ({title,data})  {

  const [startIndex, setStartIndex] = useState(0);
  const total = data.length;
  console.log(total)
  const cardsPerSlide = 5;
    const canGoLeft = startIndex > 0;
    const canGoRight = startIndex + cardsPerSlide < total;
  
    const handleRight = () => {
      if (startIndex + cardsPerSlide >= total - 3) {
        setStartIndex(total - 5);
        console.log("tR",startIndex)
      } else {
        setStartIndex(startIndex + cardsPerSlide);
        console.log("eR",startIndex)
      }
    };
  
    const handleLeft = () => {
      if (startIndex - cardsPerSlide <= 0) {
        setStartIndex(0);
        console.log("tL",startIndex)
      } else {
        setStartIndex(startIndex - cardsPerSlide);
        console.log("eL",startIndex)
      }
    };

  return (
   <>
 
    <div className="con d-none d-md-block position-relative bg-primary m-auto" style={{maxWidth:'95%'}}>
        <h4 className='my-4'>{title}</h4>
        <div className="carousel-track d-flex  m-auto gap-3" style={{  transform: `translateX(-${startIndex * (100 / cardsPerSlide)}%)`}}>
            {
                data.map((d,i)=>(
                    <div className="carousel-card " key={i}  >
                        <img src={d.img} alt="" className='w-100 h-75'/>
                        <p><small className='fw-bold '>{d.name && d.name.length > 25 ? d.name.substring(0,10) + "..." : d.name}</small></p>
                        <p><small className='text-secondary '>{(d.address).join(', ')}</small></p>
                    </div>
                ))
            }
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
            <h4 className='d-md-none'>{title}</h4>
            <div className="mobile-scroll d-md-none mt-2 mb-2 d-flex gap-3" style={{width:'95%'}}>
                
          {
            data.map((d,i)=>(
                <div key={i}>
                    <img src={d.img} alt="" className='w-100 '/>
                    <small>{d.name && d.name.length > 15 ? d.name.substring(0,10) + "..." : d.name}</small>
                    <small>{(d.address.length < 10 ? d.address.slice(0,10) + "..." : d.address)}</small>
                </div>
            ))
          }
        </div>

   </>
  )
}


export const Studio = () => {
  return (
   <>
    <OutDoor title="Your Music Studio" data={studioData}/>
    <OutDoor title="Outdoor Events" data={outDoorData}/>
    <OutDoor title="Laughter Therapy" data={therepyData}/>
    <OutDoor title="Popular Event" data={popularData}/>
    <OutDoor title="Latest Plays " data={LastPlayData}/>
    <OutDoor title="Top Game & Sport Events" data={topGameData}/>
   </>
  )
}
