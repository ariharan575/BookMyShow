import React, { useEffect, useRef,useState,useContext } from 'react'
import {Modal,Form,ListGroup, ListGroupItem} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { locContext } from '../App';

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
         <div className="movieContainer d-flex bg-white p-2 mb-3 w-50 m-auto gap-2 rounded-2" >
            {
        display.map((lang)=>(
           <button key={lang.id} onClick={()=>HandleClick(lang)} 
           className={clickId.includes(lang.id) ? " bg-danger border text-white rounded-pill ps-2 pe-2" : "  rounded-pill text-danger ps-2 pe-2 border ps-2 pe-2"} >
            {lang.language}</button>
        ))
          }
          </div>)}

export const SearchBarMovie = ({action,handleClose}) => {

   const Navigate = useNavigate();
  const {location,setLocation}= useContext(locContext);

  const popularSearch = ["Kantara-Chapter-1","Itily Kadai","VTV","Kushi (2000)","Attagasam","Bahubali-Epic","Kgf-chapter-1","They Call Him OG"];

  const [movieData,setMovieData] = useState([]);
  const [search,setSearch] = useState("");
  const [filterData,setFilterData] = useState([]);
  const [selectMovie,setSelectMovie] = useState([]);
  const [loading,setLoading] =useState(false);
  const [error,setError] =useState(false);
  const inputRef = useRef(null);

  function handleChange (e) {
    const value1 = inputRef.current.value;
    setSearch(value1)
    // const filterMovie = data.filter((d)=>(d.Title.toLowerCase().includes(value1.toLowerCase())))
    // console.log(filterMovie);
    // setFilterData(filterMovie)
  }


    useEffect(()=>{
        if(! search) return ;
        
        setLoading(true)

    const fetchData = async () =>{
        fetch(`https://omdbapi.com/?s=${search}&page=1&apikey=7f16520e`).then((res)=>res.json())
        .then((data)=>{
            setMovieData(data.Search)
        }).catch((err)=>console.log("err",err))
        .finally(()=>{
            setLoading(false)
        })
    }
    fetchData();
    },[search])

    useEffect(()=>{
        if(action){
            inputRef.current.focus();
        }
    },[action])

    function handleSelect (id) {
      const movieSelect = movieData.find((movie)=>movie.imdbID === id)
      const selectMovieName = `${movieSelect.Title}  (${movieSelect.Year})` ;
      
      Navigate(`/explore/movie/${location}/${movieSelect.Title}/${movieSelect.imdbID}`)
      
    }


  return (
   <>
  <Modal show={action} onHide={handleClose} fullscreen animation={false} style={{width:'100%'}}>
    <Modal.Header >
        <Form className='w-50 m-auto'>
     <Form.Control ref={inputRef}
                   type='text' 
                   onChange={handleChange}
                   placeholder='Search for Movies, Events, Plays & more... 
                   'className='m-auto bg-secondary-subtle p-2 rounded-pill ps-3 border-0'/>
        </Form>
   </Modal.Header>
     
   <Modal.Body className='bg-secondary-subtle w-100 m-auto  '>
       <SortListed/>
    
    <ListGroup className='w-50 m-auto border-2 rounded-1 ' style={{height:'80%',overflowY:"auto"}}>
        
      {
        loading && (
          <h3 className='d-flex justify-content-center mt-2'>Loading...</h3>
        )
      }
      
      { movieData === undefined ? console.log("bro") : (
        movieData.map((movie)=>(
          <ListGroup.Item key={movie.imdbID} onClick={()=>handleSelect(movie.imdbID)}>{`${movie.Title}  (${movie.Year})`}</ListGroup.Item>
        ))
      )

      }
      {
        !search && (
          <>
          <h5>Trending Search</h5>
          {popularSearch.map((s,i)=>(
          <ListGroupItem key={i}>{s}</ListGroupItem>
        ))}
          </>

        ) 
      }
    </ListGroup>

   </Modal.Body>
    </Modal>
   </>
  )
}
