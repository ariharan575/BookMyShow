import React, { useState,useRef, useEffect } from 'react'
import district from '../datas/location'
import { useNavigate } from 'react-router-dom';

export const LocationSearch = ({popup,setLocation,setPopup}) => {

  const Navigate = useNavigate();

  const inputRef = useRef(null);
  const popupRef = useRef(null);

  const PopularCityList = ['Mumbai','Ahmedabad','Delho-NCR','Bengaluru','Hyderbad','Chandigar','Chennai','Pune','Kolkata','Kochi']
  const [query,setQuery] = useState('')

  const [filterData,setFilterData]= useState([])
  const [notFound,setNotFound] = useState(false);
  const [closeBtn,setCloseBtn]= useState(false)
  const [viewAll,setViewAll] =useState(false)

  const visibleCities = viewAll ? district.slice(0,25) : "" ;

  function HandleClose () {
    setCloseBtn(true)
    setFilterData("")
    setQuery('') 
      setPopup(false)  
  }
  function handleSelectDist (data) {
    const {district} = data;
    setQuery(district)
    setLocation(district)
    setPopup(false)  
    localStorage.setItem("city",district)
      Navigate(`/explore/home/${district.toLowerCase()}`)
      window.location.reload();
  }
  function HandleFunction (e) {
    const value = e.target.value;
    setQuery(value)

    if(value.trim() === ""){
          setCloseBtn(false)
          setFilterData("")          
    }
    else if(value.trim().length <= 1){
      setCloseBtn(true)
    }
    else if(value.trim().length < 2){
      return setFilterData([]);
    }
    else{
      const filterLocation = district.filter((dis)=>(
        dis.district.toLowerCase().includes(value.toLowerCase())
      ))
            setNotFound(filterLocation.length <= 0 ? true : false)
            setFilterData(filterLocation)
      
    }
   
  }
  function handleSelect (data) {
    setLocation(data)
      setPopup(false)  
      localStorage.setItem("city",data)
    Navigate(`/explore/home/${data.toLowerCase()}`)
    window.location.reload();
  }

  useEffect(()=>{
    if(popup){
      inputRef.current.focus();  
    }
  },[popup])

  return (
    <>
    <div className="Location-container m-auto  mt-5 pt-3 w-100 p-3 m-auto bg-light" ref={popupRef} onClick={(e) => e.stopPropagation()}>
      <div className="inputSearchbar d-flex align-items-center justify-content-between ps-4 pe-4 gap-2 border border-secondary-subtle p-2 " >
        <div className="serachbar ">
 <i className="bi bi-search" ></i>
        <input type="text" ref={inputRef} value={query} autoFocus onChange={HandleFunction} placeholder='Search for you city' className=' ps-3 ' style={{outline:'none',boxShadow:'none',border:'none'}} />
        </div>
     
        <small className={closeBtn ? "d-block h-50 btn btn-secondary p-0 ps-2 pe-2" : "d-none"} onClick={HandleClose}>x</small>
      </div>
      <p className="text-danger mt-3">Detect My Location</p>
      <div className="citiesList">
        <div className="popularCity">
          <p className="text-center">Popular Cities</p>
          <ul className='d-flex text-center p-0 m-auto row row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xl-10 w-100  '>
              {
                PopularCityList.map((city,i)=>(
                   <li  key={i} onClick={()=>handleSelect(city)} >{city}</li>
                ))
              }
          </ul>
        </div>
        <div className="allCity text-center  ">
          <p className={viewAll ? "text-center mt-2 cursor-pointer" : " mt-2 cursor-pointer text-danger text-center"} onClick={()=>setViewAll(true)}>{viewAll ? "Other Cities" : "View All Cities" }</p>
            {
              viewAll && (
                <div className="viewAll ">
               <ul className='d-flex m-auto row row-cols-sm-2 row-cols-md-4 row-cols-lg-5 row-cols-xxl-10  p-0 w-100 '>
                  {
                   visibleCities.map((city,index)=>(
                  <li key={index} onClick={()=>handleSelect(city.district)}><small>{city.district}</small></li>
              ))
                  }
                  </ul>
                  <p className='text-danger m-auto mt-4' onClick={()=>setViewAll(false)}>Hide All Cities</p>
              
                </div>
              )
            }
       </div>
      </div>
            <div className="container bg-light border-2 border-secondary " style={{position:'absolute',top:'25%',width:'73%'}}>
        {
          
             filterData && filterData.map((data,index)=>(
                 <ul key={index} className='border border-secondary-subtle' onClick={(()=>handleSelectDist(data))} >
                <li>{data.district}</li>
                <li>{data.state}</li>
                 </ul>
              ))
         
        }
        {
           notFound && (
            <div className="container bg-light border-2 border-secondary " style={{position:'absolute',top:'10%',left:'0',width:'80%'}}>
              <p className='border-2 border-secondary'>City Not Found</p>
            </div>
           )
        }
      </div>
    </div>
    </>
  )
}

