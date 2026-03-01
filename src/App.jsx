import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import {Home} from './componant/home/Home'
import {AllMovieList} from './componant/clickComponant/AllMoviesList'
import MovieClick from './componant/clickComponant/MovieClick'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'

export const locContext = createContext();

function App() {

  const [location,setLocation] = useState(localStorage.getItem("city") || "");
  const citySaved = localStorage.getItem("city")


  const [popup,setPopup] = useState(citySaved == null || 0 ? true : false )

  const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<Navigate to='/explore/home'/>}/>
    <Route path='explore/home' element={<Home/>}/> 
      <Route path='explore/home/:city' element={<Home/>}/>
      <Route path='explore/movie/:city' element={<AllMovieList/>}/>
      <Route path='explore/movie/:city/:movies/:id' element={<MovieClick/>}/>
  </>
))
  
  return (
    <>
 
    <locContext.Provider value={{location,setLocation,popup,setPopup}}>
  <RouterProvider router={router}>
   </RouterProvider>
    </locContext.Provider>
    </>
  )
}

export default App
