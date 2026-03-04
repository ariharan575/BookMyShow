import React from 'react'
import movieDetails from '../Datas/movieDetails'

export function Trending  () {

 const moviesData = movieDetails.slice(0,7).sort((a,b)=>a.rating - b.rating)

  return (<>
            <div className="trandingContainer d-none d-md-block m-auto mt-3 mb-5" style={{width:'100%'}}>
            <div className="trending d-flex flex-wrap gap-3 m-auto " style={{width:'90%'}} >
            {
                moviesData.map((movie,index)=>(
                    <div className="trendMovie border border-secondary-subtle  ps-2 pe-5  " key={movie.id}>
                        <p className='text-danger mb-1'>{movie.movie_name}</p>
                        <small className='mb-0'>Movies</small>
                    </div>
               ))
            }
        </div>
     </div>
     </>
  )
}
  
