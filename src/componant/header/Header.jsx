import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import SignIn from '../../SignIn'
import { LocationSearch } from '../clickComponant/LocationSearch'
import { SearchBarMovie } from '../SearchBarMovie'
import { Button } from 'react-bootstrap'
import '../../App.css'
import { Toggle } from '../Toggle'
import { locContext } from '../../App'
import { useNavigate } from 'react-router-dom'


export default function Header  () {

  const Navigate = useNavigate()
  
  const {location,setLocation}= useContext(locContext)
  const {popup,setPopup} = useContext(locContext)

   const [signShow,setSignShow] =useState(false)
   const [toggleShow,setToggleShow] =useState(false)

  const [searchModal,setSearchModal] =useState(false)


  function handlePopup () {
    setPopup(true)
      Navigate(`/explore/home/${location}`)
  }
  return (
   <>
   <div className="headcontainer m-auto d-none d-md-flex justify-content-between gap-md-0 gap-lg-2 gap-xl-3 align-items-center m-3 mt-1" style={{width:'95%'}} >
    <div className=" imgDiv d-flex " >
        <img src="/imges/logo2.jpg" alt="" width={90} height={25} style={{objectFit:'full'}} />
        <button className=' d-none d-xl-flex justify-content-start ms-2 border-0 ' style={{color:'grey'}} variant="light" onClick={()=>setSearchModal(true)}><i className="bi bi-search " ></i>Search for Movies, Events, Plays, Sports and Acivities</button>
        <button className=' d-md-flex d-xl-none justify-content-start ms-2 border-0 ' style={{color:'grey'}} variant="light" onClick={()=>setSearchModal(true)}><i className="bi bi-search " ></i>Search for Movies,Events,Plays,Sports...</button>
       </div>
    <div className="locationContainer d-flex justify-content-end align-items-center gap-sm-0 gap-md-1 gap-lg-2 gap-xl-3  ">
            <button className='font-arial border-0 ' onClick={handlePopup}>{location}<i className="bi bi-chevron-down"></i></button>
            <button className='bg-danger  text-light border rounded-3' onClick={()=>setSignShow(true)}>sign in</button>
             <button className="bi bi-list border-0 fs-3" onClick={()=>setToggleShow(true)}></button> </div>
   </div>
   <div className="smcontainer d-flex gap-3 d-sm-none justify-content-center p-2 " style={{width:'100%',height:'45px'}}>
    <img src="/imges/logo2.jpg" alt="" width={90} style={{objectFit:'full'}} />
     <p className=' d-md-flex justify-content-start ms-2  border-0 ' style={{color:'grey'}} variant="light" onClick={()=>setSearchModal(true)}><i className="bi bi-search me-2" ></i>Search for Movies,Events...</p>
      <p className='font-arial border-0 fw-1 ' onClick={handlePopup}>{location}<i className="bi bi-chevron-down"></i></p>
      <strong className="bi bi-list text-dark " onClick={()=>setToggleShow(true)}></strong>
   </div>
          {signShow && (
            <div className="overlay position-fixed top-0 left-0 h-100 w-100 
            d-flex justify-content-center align-items-center " onClick={() => setSignShow(false)}  style={{zIndex:'20'}}>
              <SignIn/>
            </div>
          )} 
         {popup && (
            <div className="overlay position-fixed top-0 left-0 h-100  w-100 
                d-flex justify-content-center align-items-center " onClick={() => setPopup(false)} style={{zIndex:'20'}}>
                <LocationSearch  setLocation={setLocation} popup={popup} setPopup={setPopup} />  </div>
          )} 
         {
             searchModal && <SearchBarMovie action={searchModal}   handleClose={()=>searchModal(false)}  />
         }
         {
          toggleShow && <Toggle toggleShow={toggleShow} 
           handleClose={()=>setToggleShow(false)} setSignShow={setSignShow}/>
         }
   </>
  )
}


