import React,{useState,useEffect} from 'react'
import instance from '../instances';
import './Row.css'


function Row({fetchUrl,title,isPoster}) {
    const base_Url = ' https://image.tmdb.org/t/p/original/'
    const [movie,setMovie]=useState([])

    const fetchData = async() =>{
        const {data}=await instance.get(fetchUrl)  
        setMovie(data.results)
      }
      useEffect(()=>{
        fetchData()
      },[])
  return (
    <div className='row'>
     <h4 style={{fontWeight:'bold'}}>{title}</h4>
    <div className='all_movies'>
      {
          movie.map(item=>(
            <img className={`${isPoster&&'movie_large'} movie`} src={`${base_Url}/${isPoster?item.poster_path:item.backdrop_path}`} alt='no image' />

          ))
      }
    </div>
  </div>
  )
}

export default Row