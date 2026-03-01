import React, { useContext } from 'react'
import {NavLink, useNavigate, useParams} from 'react-router-dom'
import { locContext } from '../../App'

export const Navbar = () => {
    const navigate = useNavigate();
      const {location,setLocation}= useContext(locContext)
      const {popup,setPopup} = useContext(locContext)
    const cityName = location || localStorage.getItem("city");

  return (
    <>
    <div className="nContainer d-none d-md-flex  m-auto justify-content-between  " style={{width:'95%'}} >
    <div className='d-flex  gap-sm-1 gap-md-2 gap-lg-3 gap-xl-4 '>
      <NavLink to={`/explore/movie/${cityName}`} className='link' ><small >Movies</small></NavLink>
      <NavLink to={`/explore/movie/${cityName}`} className='link'><small>Stream</small></NavLink> 
     <NavLink  to='/event' className='link'><small>Events</small></NavLink> 
      <NavLink to='/plays' className='link'><small>Plays</small></NavLink>
     <NavLink to='/sports' className='link'> <small>Sports</small></NavLink>
    <NavLink to='/activities' className='link'><small>Activities</small></NavLink>  
    </div>
    <div className='d-flex  gap-sm-1 gap-md-2 gap-lg-3 gap-xl-4 '>
     <NavLink to='/listyourshow' className='link'><small>List Your Show</small></NavLink> 
     <NavLink to='/corporates' className='link'><small>Corporates</small></NavLink> 
     <NavLink to='/offers' className='link'><small>Offers</small></NavLink> 
      <NavLink to='/giftcards' className='link'><small>Gift Cards</small></NavLink>
    </div>
   </div>
       <div className="nContainer d-sm-none d-flex m-auto justify-content-between gap-5 mb-2 " style={{width:'85%'}} >
    <div className='d-flex gap-3 '>
      <NavLink to={`/explore/movie/${cityName}`} className='link' ><small >Movies</small></NavLink>
      <NavLink to={`/explore/movie/${cityName}`} className='link'><small>Stream</small></NavLink> 
     <NavLink  to='/event' className='link'><small>Events</small></NavLink> 
      <NavLink to='/plays' className='link'><small>Plays</small></NavLink>
     <NavLink to='/sports' className='link'> <small>Sports</small></NavLink>
    <NavLink to='/activities' className='link'><small>Activities</small></NavLink>  
    </div>
    <div className="allnav">
      <NavLink to='' className='link'><small>View All</small></NavLink>
    </div>
    </div>
    </>
    ) 
  }

