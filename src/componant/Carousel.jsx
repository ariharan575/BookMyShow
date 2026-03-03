import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import'bootstrap-icons/font/bootstrap-icons.css'

export const Carousel = () => {

  return (<>
        <div  id="example" className="carousel slide custom-curousel m-auto " data-bs-ride='true' data-bs-interval='1000'  >
      <div className="carousel-indicators ">
        <button type='button'  data-bs-target='#example' data-bs-slide-to='0' aria-label='Slide-0' aria-current='Slide-0'className=' indicate active' style={{width:'10px',height:"10px",borderRadius:'50%'}} ></button>
        <button type='button' data-bs-target='#example' data-bs-slide-to='1' aria-label='Slide-1' className=' indicate' style={{width:'10px',height:"10px",borderRadius:'50%'}}></button>
         <button type='button' data-bs-target='#example' data-bs-slide-to='2' aria-label='Slide-2' className='indicate ' style={{width:'10px',height:"10px",borderRadius:'50%'}}></button>
      </div>
      <div className="carousel-inner "      >
        <div className="carousel-item  "   >
            <img src ='/imges/firstAd.jpg'  alt="" />
        </div>
        <div className="carousel-item active "   >
            <img src ='/imges/ad3.jpg'  alt=""   />
        </div>

        <div className="carousel-item ">
         <img src='/imges/secad.jpg' alt=""  />
        </div>
      </div>

      <button className='carousel-control-prev ' type='button' data-bs-target='#example' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' ></span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#example'data-bs-slide='next'>
        <span className='carousel-control-next-icon'  aria-hidden='true' ></span> </button></div>
    </>
  )
}


