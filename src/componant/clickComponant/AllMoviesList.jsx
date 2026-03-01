import React from 'react'
import { useContext,useState } from 'react'
import { locContext } from '../../App'
import { Carousel } from '../content/Carousel'
import moviesList from '../../datas/movieDetails'
import { Footer } from '../footer/Footer'
import { SearchBarMovie } from '../SearchBarMovie'
import { Link, useNavigate } from 'react-router-dom'

export const AllMovieList = () => {
    const navigate = useNavigate();
     const {location,setLocation}= useContext(locContext)
     const [searchModal,setSearchModal] =useState(false)
     

  return (
   <>
   <div className="navMovieContainer m-auto " style={{width:'100%'}}>
    <div className="main d-flex align-items-center justify-content-between m-auto mt-2" style={{width:'90%'}}>
        <div className="divlocation d-flex align-items-center">
             <h5 onClick={()=>navigate(`/explore/home/${location}`)} className='curser-pointer'><i className="bi bi-chevron-left fw-5  "></i></h5>
             <div className="div d-grid ps-3">
             <h5>Now Showing</h5>
            <small>{location}| 36 Movies</small>
             </div>
        </div>
        <div className="divIcon">
            <i className="bi bi-search fs-2 " onClick={()=>setSearchModal(true)} ></i>
        </div>
    </div>
        <hr />
        <Carousel/>
       
          
  <div className="overContianer m-auto my-3  " style={{width:'95%'}}>

        <div className="overAllDivImge d-none d-md-flex gap-3 m-auto flex-wrap "  >
    {
        moviesList.map((movie,index)=>(
            <div className="allmovie" style={{width:'18.9%'}}  key={movie.id} ><Link to={`/explore/movie/chennai/${movie.movie_name}/${movie.id}`} className='link'>
                <img src={movie.img} alt="" className='w-100 '/>
                <h5>{movie.movie_name}</h5>
             </Link></div>
    ))}
        </div>
        <div className="overAllDivImge d-flex d-md-none m-auto p-auto ps-4 flex-wrap w-100 "  >
    {
        moviesList.map((movie,index)=>(
            <div className="allmovie p-auto" style={{width:'50%',height:'30%'}}  key={movie.id} ><Link to={`/explore/movie/chennai/${movie.movie_name}/${movie.id}`} className='link'>
                <img src={movie.img} alt="" className='p-auto m-auto' style={{height:"300px",width:'90%',objectFit:"cover"}}/>
                <h5>{movie.movie_name}</h5>
             </Link></div>
    ))}
        </div>
        </div>
            
  </div>
<Footer/>
         {
             searchModal && <SearchBarMovie action={searchModal}   handleClose={()=>searchModal(false)}  />
         }
   </>
  )
}
