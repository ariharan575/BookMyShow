import React, { useEffect,useContext } from 'react'
import  Header  from './Header'
import { Navbar } from './Navbar'
import {Event} from './Event'
import  Premire  from './Premire'
import { Footer } from './Footer'
import { Trending } from './Trending'
import { Carousel } from '../componant/Carousel'
import  Movie  from '../Movie/MovieDetails'
import { locContext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'
import Example from './Example'


export const Home = () => {

const {location,setLocation}= useContext(locContext)
  const navigate = useNavigate();
  const {city} =useParams()

useEffect(()=>{
  if(!city && location){
    navigate(`/explore/home/${location.toLowerCase()}`);
  }
},[city,location,navigate])

  return (
   <>
   
   <div>
   <Header  />
   <Navbar/>
   <Carousel/>
   <Movie/>
   <Event/> 
    <Premire/>
    <Example/>
   <Trending/>
   <Footer/> 
       
   </div>
   </>
  )
}
