import React, { useEffect, useState } from 'react'
import './VideoList.css'
import instance from '../instances';
import {Card, Button,Carousel } from 'react-bootstrap'


function VideoList({fetchUrl}) {
    const base_Url = ' https://image.tmdb.org/t/p/original/'
    const [allMovies,setAllmovies]=useState([])

    const fetchData = async() =>{
        const {data}=await instance.get(fetchUrl)  
        setAllmovies(data.results)
      }
      useEffect(()=>{
        fetchData()
      },[])
      console.log(allMovies);
  return (
    
   <>
  <div className='container'>
       <div>
           <h4 style={{color:'orange',fontWeight:'bold'}}>What to Watch</h4>
               <h5 style={{borderLeft:'4px solid orange',borderRadius:'1px',marginTop:'1.5rem',fontWeight:'bold',fontSize:'30px'}}><a  style={{color:'white',textDecoration:'none',marginRight:'10px',paddingLeft:'10px'}} href="">Top Picks</a><i className='icon' style={{marginTop:'10px'}} class="fa-solid fa-greater-than fa-xs"></i></h5>
          
           <p>Tv Shows and movies just for you</p>
       </div>

  <div >
         
  
       <Carousel fade  >
      {
        allMovies.map((item,index)=>(
            <Carousel.Item>

        <div className='d-flex justify-content-evenly m-5'>
            
        <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src={`${base_Url}/${item.poster_path}`} />
              <Card.Body>
                <div className='d-flex align-items-center'>
                <i class="fa-solid fa-star" style={{color:"orange",paddingRight:"8px"}}></i>
                    <div>{item.vote_average}</div>
                   <div style={{paddingLeft:'25px'}}> <i class="fa-regular fa-star" style={{color: "#0400ff"}}></i> </div>
                 </div>
        
                <Card.Title className='mt-2' style={{fontSize:'18px',color:'white'}}>{`${item.title}`}</Card.Title>
               <div className='d-flex justify-content-center align-items-center mt-5'>
                   
                    <Button  style={{color: "#0400ff"}} className='w-100 '  variant="secondary"><i class="fa-solid fa-plus"></i> Watchlist</Button>
               </div>
        
               <div className='d-flex justify-content-center align-items-center mt-3'>
               <div style={{fontWeight:'bold',color:'white'}}><i style={{paddingRight:'10px'}}  class="fa-solid fa-play"></i>   Trailer</div>
            
               </div>
              </Card.Body>
            </Card>

            <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src={`${base_Url}/${allMovies[index+1]?.poster_path}`} />
              <Card.Body>
                <div className='d-flex align-items-center'>
                <i class="fa-solid fa-star" style={{color:"orange",paddingRight:"8px"}}></i>
                    <div>{allMovies[index+1]?.vote_average}</div>
                   <div style={{paddingLeft:'25px'}}> <i class="fa-regular fa-star" style={{color: "#0400ff"}}></i> </div>
                 </div>
        
                <Card.Title className='mt-2' style={{fontSize:'18px',color:'white'}}>{`${allMovies[index+1]?.title}`}</Card.Title>
               <div className='d-flex justify-content-center align-items-center mt-5'>
                   
                    <Button  style={{color: "#0400ff"}} className='w-100 '  variant="secondary"><i class="fa-solid fa-plus"></i> Watchlist</Button>
               </div>
        
               <div className='d-flex justify-content-center align-items-center mt-3'>
               <div style={{fontWeight:'bold',color:'white'}}><i style={{paddingRight:'10px'}}  class="fa-solid fa-play"></i>   Trailer</div>
            
               </div>
              </Card.Body>
            </Card>

            <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src={`${base_Url}/${allMovies[index+2]?.poster_path}`} />
              <Card.Body>
                <div className='d-flex align-items-center'>
                <i class="fa-solid fa-star" style={{color:"orange",paddingRight:"8px"}}></i>
                    <div>{allMovies[index+2]?.vote_average}</div>
                   <div style={{paddingLeft:'25px'}}> <i class="fa-regular fa-star" style={{color: "#0400ff"}}></i> </div>
                 </div>
        
                <Card.Title className='mt-2' style={{fontSize:'18px',color:'white'}}>{`${allMovies[index+2]?.title}`}</Card.Title>
               <div className='d-flex justify-content-center align-items-center mt-5'>
                   
                    <Button  style={{color: "#0400ff"}} className='w-100 '  variant="secondary"><i class="fa-solid fa-plus"></i> Watchlist</Button>
               </div>
        
               <div className='d-flex justify-content-center align-items-center mt-3'>
               <div style={{fontWeight:'bold',color:'white'}}><i style={{paddingRight:'10px'}}  class="fa-solid fa-play"></i>   Trailer</div>
            
               </div>
              </Card.Body>
            </Card>

            <Card style={{ width: '12rem' }}>
              <Card.Img variant="top" src={`${base_Url}/${allMovies[index+3]?.poster_path}`} />
              <Card.Body>
                <div className='d-flex align-items-center'>
                <i class="fa-solid fa-star" style={{color:"orange",paddingRight:"8px"}}></i>
                    <div>{allMovies[index+3]?.vote_average}</div>
                   <div style={{paddingLeft:'25px'}}> <i class="fa-regular fa-star" style={{color: "#0400ff"}}></i> </div>
                 </div>
        
                <Card.Title className='mt-2' style={{fontSize:'18px',color:'white'}}>{`${allMovies[index+3]?.title}`}</Card.Title>
               <div className='d-flex justify-content-center align-items-center mt-5'>
                   
                    <Button  style={{color: "#0400ff"}} className='w-100 '  variant="secondary"><i class="fa-solid fa-plus"></i> Watchlist</Button>
               </div>
        
               <div className='d-flex justify-content-center align-items-center mt-3'>
               <div style={{fontWeight:'bold',color:'white'}}><i style={{paddingRight:'10px'}}  class="fa-solid fa-play"></i>   Trailer</div>
            
               </div>
              </Card.Body>
            </Card>

            <Card style={{ width: '12rem' }}>
              <Card.Img  variant="top" src={`${base_Url}/${allMovies[index+4]?.poster_path}`} />
              <Card.Body>
                <div className='d-flex align-items-center'>
                <i class="fa-solid fa-star" style={{color:"orange",paddingRight:"8px"}}></i>
                    <div>{allMovies[index+4]?.vote_average}</div>
                   <div style={{paddingLeft:'25px'}}> <i class="fa-regular fa-star" style={{color: "#0400ff"}}></i> </div>
                 </div>
        
                <Card.Title className='mt-2' style={{fontSize:'18px',color:'white'}}>{`${allMovies[index+4]?.title}`}</Card.Title>
               <div className='d-flex justify-content-center align-items-center mt-5'>
                   
                    <Button  style={{color: "#0400ff"}} className='w-100 '  variant="secondary"><i class="fa-solid fa-plus"></i> Watchlist</Button>
               </div>
        
               <div className='d-flex justify-content-center align-items-center mt-3'>
               <div style={{fontWeight:'bold',color:'white'}}><i style={{paddingRight:'10px'}}  class="fa-solid fa-play"></i>   Trailer</div>
            
               </div>
              </Card.Body>
            </Card>
            
        </div>
        </Carousel.Item>
        ))
    }
      
      
      
    </Carousel>

  </div>
  </div>
   </>
  )
}

export default VideoList