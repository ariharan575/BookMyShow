import React, { useEffect, useRef,useState,useContext } from 'react'
import {Form,ListGroup, Spinner} from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import { locContext } from '../App';

/* ================= SORT BUTTON SECTION ================= */

export function SortListed () {

const moviefiltered = [
    {id:1,language:"Movies"},
    {id:2,language:"Stream"},
    {id:3,language:"Events"},
    {id:4,language:"Plays"},
    {id:5,language:"Sports"},
]    

const movieList =moviefiltered;

const [clickId,setClickId] = useState([]);

const HandleClick =(lang)=> {
  setClickId((prev)=>{
    if(prev.includes(lang.id)){
      return prev.filter((id)=>id !==lang.id)}
    else{
      return [...prev,lang.id].sort((a,b)=>a-b) }
  })}

const clickedMovie = clickId.map((click)=>movieList.find((f)=>click == f.id)).sort((a,b)=>a.id -b.id);
const remainingMovie = movieList.filter((f)=>!clickId.includes(f.id)).sort((a,b)=>a.id -b.id)
const display = [...clickedMovie,...remainingMovie]

return(
  <div className="movieContainer d-flex bg-white p-3 mb-3 gap-2 rounded-3 flex-wrap">
    {
      display.map((lang)=>(
        <button 
          key={lang.id} 
          onClick={()=>HandleClick(lang)} 
          className={
            clickId.includes(lang.id) 
            ? "bg-danger border text-white rounded-pill px-3 py-1"
            : "rounded-pill text-danger px-3 py-1 border"
          } >
          {lang.language}
        </button>
      ))
    }
  </div>
)}

/* ================= SEARCH PAGE ================= */

export const SearchBarMovie = () => {

  const Navigate = useNavigate();
  const { location } = useParams();
  const {setLocation}= useContext(locContext);

  const popularSearch = [
    "Kantara A Legend: Chapter 1",
    "Vada Chennai",
    "Leo",
    "Billa 2",
    "Vikram",
    "Bahubali",
    "Retro",
    "Avatar: Fire and Ash"
  ];

  const [movieData,setMovieData] = useState([]);
  const [search,setSearch] = useState("");
  const [loading,setLoading] =useState(false);
  const [error,setError] =useState(false);

  const inputRef = useRef(null);

  function handleChange () {
    const value1 = inputRef.current.value;
    setSearch(value1)
  }

   function openMovie(movie) {
     setSearch(movie);
   }

  useEffect(()=>{
    if(! search) {
      setMovieData([])
      setError(false)
      return ;
    }
        
    setLoading(true)
    setError(false)

    fetch(`https://omdbapi.com/?s=${search}&page=1&apikey=7f16520e`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.Response === "False"){
          setMovieData([])
          setError(true)
        } else {
          setMovieData(data.Search || [])
        }
    })
    .catch(()=>{
      setError(true)
    })
    .finally(()=>setLoading(false))

  },[search])

  function handleSelect (movie) {
    Navigate(`/explore/movie/${location}/${movie.Title}/${movie.imdbID}`)
  }



  return (

<div className='container-fluid bg-secondary-subtle full-height-page py-4'>

    {/* CENTER FIXED WIDTH CONTAINER */}
    <div className='col-12 col-md-10 col-lg-8 col-xl-6 mx-auto'>

        {/* SEARCH INPUT */}
        <Form className='mb-3'>
          <Form.Control
            ref={inputRef}
            type='text'
            onChange={handleChange}
            placeholder='Search for Movies, Events, Plays & more...'
            className='bg-white p-3 rounded-pill ps-4 border-0 shadow-sm'
            autoFocus
          />
        </Form>

        {/* SORT BUTTONS */}
        <SortListed/>

        {/* LOADING */}
        {loading && (
          <div className='d-flex justify-content-center mt-4'>
            <Spinner animation="border" variant="danger" />
          </div>
        )}

        {/* TRENDING */}
        {!search && (
          <div className='bg-white p-4 rounded-3 shadow-sm'>
            <h5 className='mb-3'>Trending Search</h5>
            {
              popularSearch.map((s,i)=>(
                <p key={i} className='border-bottom cursor-pointer ps-0' onClick={() => openMovie(s)}>
                  {s}
                </p>
              ))
            }
          </div>
        )}

        {/* NO RESULT */}
        {error && !loading && (
          <div className='bg-white p-4 rounded-3 shadow-sm text-center'>
            <h5 className='text-danger'>No Movies Found</h5>
            <p className='text-muted mb-0'>
              Try searching with different keywords.
            </p>
          </div>
        )}

        {/* RESULT LIST */}
        {!error && movieData.length > 0 && (
          <ListGroup className='bg-white rounded-3 shadow-sm'>
            {
              movieData.map((movie)=>(
                <ListGroup.Item
                  key={movie.imdbID}
                  action
                  onClick={()=>handleSelect(movie)}
                >
                  {movie.Title} ({movie.Year})
                </ListGroup.Item>
              ))
            }
          </ListGroup>
        )}

    </div>

  </div>
  )
}