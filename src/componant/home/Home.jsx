import React, { useEffect,useContext } from 'react'
import  Header  from '../header/Header'
import { Navbar } from '../navbar/Navbar'
import {Event} from '../event/Event'
import  Premire  from '../premiere/Premire'
import { Footer } from '../footer/Footer'
import { Trending } from '../trending/Trending'
import { Carousel } from '../content/Carousel'
import  Movie  from '../movie/Movie'
import { locContext } from '../../App'
import { useNavigate, useParams } from 'react-router-dom'
import Example from '../Example'


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
   
   <div className='h-[100vh]'>

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
