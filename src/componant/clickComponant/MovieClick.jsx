import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Footer} from '../footer/Footer'
import moviesList from '../../datas/movieDetails'


const Movie = () => {
  
  const movieFilter = moviesList.slice(0,5)
  const [store,setStore] =useState([]);
  const [loading,setLoading] = useState(false);
  const {movies,id} = useParams();

  const movie = moviesList.find((m)=>m.movie_name === movies);

  const detailsID = id;

 useEffect(()=>{
      setLoading(true);
      const fetchID =  async () => {
        fetch(`https://omdbapi.com/?i=${detailsID}&apikey=7f16520e`).then((res)=>res.json())
        .then((data)=>{
            setStore(data)
            console.log(data)
        }).catch((err)=>console.log(err))
        .finally(()=>{
            setLoading(false)
        })
    }
    fetchID()
 },[])
   

  return (
   <>
    {
  !movie && (
    <>
      <div className="contantContainer d-flex h-75 mt-2 m-auto align-items-center" style={{backgroundImage:`url(${store.Poster})`,backgroundSize:'cover',backgroundPosition:'center',filter:'0.9'}}>
    
       <img src={store.Poster ? store.Poster : "/imges/box.jpg" } alt="" className=' ps-4 ' style={{width:'35%',height:'75%'}}/>
      
      <div className="details ms-4 p-2 ">
        <h1 className='text-light 'style={{textShadow:'0px 3px 4px black'}}>{store.Title}</h1>
        <p className='bg-dark text-white p-1 align-items-center d-inline d-xl-block'>{`${store.imdbRating } / 10 (${store.imdbVotes} Votes) >`}<button className='bg-light border-0 rounded-2 '>Rating Now</button></p>
        <p className='bg-light p-1 d-inline-block  mt-3 rounded-2 d-xl-block d-lg-block'>{store.Actors}</p>
        <p className='bg-light p-1 d-inline-block rounded-2'>{store.Language}</p>
        <p className='text-light' style={{textShadow:'0px 3px 4px black'}} >{`${store.Runtime} ${store.Genre} ${store.Rated} ${store.Released}`}</p>
      <button className="text-light bg-danger border rounded p-1 ps-3 pe-3">Book Ticket</button>
      </div>        
      </div>

    <div className="containers w-50 ms-4 mt-3">
        <h5>About</h5>
        <p>{`${store.Plot} Stared the Film of  ${store.Actors} and andalso The director of  ${store.Director} and writer  ${store.Writer} `}</p>
      </div>
    <div className="containers ms-4 d-flex w-50 mt-3 mb-3 gap-2 justify-content-start">
    {
      movieFilter.map((m,i)=>(
        <div className="div " key={i}>
          <img src={m.img} alt="" style={{width:'100%',height:'80%'}}/>
          <p>{m.movie_name}</p>
        </div>
      ))
    }
    </div>
    </>

      )
}
{ movie && (
  <>
    <div className="containe d-none d-md-block" style={{height:"100%"}} >
      <div className="contantContainer d-flex w-100 h-75  m-auto p-5 align-items-center" style={{backgroundImage:`url(${movie.img})`,backgroundSize:'cover',backgroundPosition:'center',filter:'0.9'}}>
        <img src={movie.img} alt="" className='d-md-flex justify-content-center d-none align-items-center h-100 ms-5 me-5'/>
      <div className="details h-50 ">
        <h1 className='text-light 'style={{textShadow:'0px 3px 4px black'}}>{movie.movie_name}</h1>
        <p className='bg-dark text-white p-2'>{`${movie.rating } / 10 (${movie.votes} Votes) >`}<button className='bg-light border-0 rounded-2 ms-5'>Rating Now</button></p>
        <p className='bg-light p-1 d-inline-block me-2 rounded-2'>{movie.visuals.join(",").toUpperCase()}</p>
        <p className='bg-light p-1 d-inline-block rounded-2'>{movie.languages.join(",")}</p>
        <p className='text-light'>{`${movie.time_duration} ${movie.movie_format} ${movie.censor_code} ${movie.release_date}`}</p>
      <button className="text-light bg-danger border rounded p-1 ps-3 pe-3">Book Ticket</button>
      </div>        
      </div>
      <div className="about d-none d-md-block w-50">
        <h5>About</h5>
        <p>{`${movie.about_movie} ${movie.cast} ${movie.crew} ${movie.about_movie}`}</p>
      </div>
   <div className="main d-flex justify-content-between">
      <small className='h5 text-start'>You might also like</small>
      <small className='text-danger text-end'>View All</small>
      </div>
      <div className="suggest d-flex gap-3 h-50">
          {
    movieFilter.map((m,i)=>(
      <div className="mainDiv w-75 mobile-scroll mb-3 " key={i} >
        <img src={m.img} alt="" className='' style={{objectFit:"cover",height:'100%'}}/>
        <h5>{m.movie_name.length > 15 ? m.movie_name.slice(0,15) + "..." : m.movie_name}</h5>
      </div>
    ))
  }
      </div>
    <Footer/>

    </div>



    <div className="mobileView d-md-none m-auto mt-2" style={{width:'90%',height:'100%'}}>
      <h2><i className="bi bi-chevron-left me-3 mb-3"></i>{movie.movie_name}</h2>
      <img src={movie.img} alt="" className='rounded-4'style={{width:'100%',height:"50%",objectFit:"cover"}} />
      <p className='bg-secondary text-white p-2 mt-3 w-75'>{`${movie.rating } / 10 (${movie.votes} Votes) >`}<button className='bg-light border-0 rounded-2 ms-5'>Rating Now</button></p>
       <p className='bg-secondary-subtle p-1 d-inline-block me-2 rounded-2'>{movie.visuals.join(",").toUpperCase()}{movie.languages.join(",").toUpperCase()}</p>
       <p className='text-dark'>{`${movie.time_duration} ${movie.movie_format} ${movie.censor_code} ${movie.release_date}`}</p>
      <p>{`${movie.about_movie} and the Actors of ${movie.cast}`}</p>
      <div className="main d-flex justify-content-between">
      <small className='h5 text-start'>You might also like</small>
      <small className='text-danger text-end'>View All</small>
      </div>
      <div className="suggestDiv mobile-scroll d-flex gap-3 w-100 h-50">
  {
    movieFilter.map((m,i)=>(
      <div className="mainDiv w-50 " key={i} >
        <img src={m.img} alt="" className='' style={{objectFit:"cover",height:'100%'}}/>
        <h5>{m.movie_name.length > 15 ? m.movie_name.slice(0,15) + "..." : m.movie_name}</h5>
      </div>
    ))
  }

  </div>
 <p>Report Content</p>
  <button className='w-100 btn btn-danger text-white rounded-3 d-fixed p-3'>Book Ticket</button>
    
  </div>
  </>
   )}
   </>
   
  )
}


export default function MovieClick  ()  {
  return(
    <>
    <Movie/> 
    </>
  )
}