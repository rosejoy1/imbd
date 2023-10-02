import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import instance from '../instances';
import'./Banner.css'


function Banner({fetchUrl}) {
    const base_Url = ' https://image.tmdb.org/t/p/original/'
    const [movie,setMovie]=useState([])

    const fetchData = async() =>{
        const {data}=await instance.get(fetchUrl)  
        setMovie(data.results)
      }
      useEffect(()=>{
        fetchData()
      },[])
    //   console.log(movie);
  return (
    <>
      <Container>
      <Row>
        <Col sm={8}>
        <Carousel data-bs-theme="dark">
            {
                movie.map(item =>(
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={`${base_Url}/${item.backdrop_path}`}
          alt="First slide"
        />
        <Carousel.Caption >
          <h2>{`${item.original_title}`}</h2>
          <p style={{fontWeight:'bold',color:'white'}}>{`${item.overview.slice(0,100)}`}...</p>
        </Carousel.Caption>
      </Carousel.Item> 
        ))
        }
    </Carousel>
        </Col>
        <Col sm={4} xs={12}>
          <div>
                <h5 style={{color:'orange',fontWeight:'bold'}}>Up Next</h5>
                <div className='poster d-flex mb-2'>
                    <div className='poster_1'>
                        <img
                        style={{width:'90px'}}
                       className='imge'
                        src={`${base_Url}/${movie[Math.floor(Math.random()*movie.length)]?.poster_path}`} alt="" />
                        <div className='pst'>
                            <div className='d-flex align-items-center'>
                            <div className='me-2'><svg className='right-poster-play' style={{color:'white'}} width="30" height="30" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-d4cb23a2-14 ejjmJF editorial-play-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg></div>
                            <div>{`${movie[Math.floor(Math.random()*movie.length)]?.vote_average}`}</div>
                            </div>
                            <div style={{color:'white',fontWeight:'bold'}} className='poster-con mt-4'>{`${movie[Math.floor(Math.random()*movie.length)]?.title}`}</div>
                            <div>{`${movie[Math.floor(Math.random()*movie.length)]?.overview?.slice(0,30)}`}...</div>
                        </div>

                    </div>
                    
                </div>

                <div className='poster d-flex mb-2'>
                    <div className='poster_1 '>
                        <img
                        style={{width:'90px'}}
                        className='imge'
                        src={`${base_Url}/${movie[Math.floor(Math.random()*movie.length)]?.poster_path}`} alt="" />
                        <div className='pst'>
                            <div className='d-flex align-items-center'>
                            <div className='me-2'><svg className='right-poster-play' style={{color:'white'}} width="30" height="30" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-d4cb23a2-14 ejjmJF editorial-play-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg></div>
                            <div>{`${movie[Math.floor(Math.random()*movie.length)]?.vote_average}`}</div>
                            </div>
                            <div style={{color:'white',fontWeight:'bold'}} className='poster-con mt-4'>{`${movie[Math.floor(Math.random()*movie.length)]?.title}`}</div>
                            <div>{`${movie[Math.floor(Math.random()*movie.length)]?.overview?.slice(0,30)}`}...</div>
                        </div>

                    </div>
                    
                </div>


                <div className='poster d-flex mb-2'>
                    <div className='poster_1 '>
                        <img
                        style={{width:'90px'}}
                        className='imge'
                       
                        src={`${base_Url}/${movie[Math.floor(Math.random()*movie.length)]?.poster_path}`} alt="" />
                        <div className='pst'>
                            <div className='d-flex align-items-center'>
                            <div className='me-2'><svg className='right-poster-play' style={{color:'white'}} width="30" height="30" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-d4cb23a2-14 ejjmJF editorial-play-icon" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg></div>
                            <div>{`${movie[Math.floor(Math.random()*movie.length)]?.vote_average}`}</div>
                            </div>
                            <div style={{color:'white',fontWeight:'bold'}} className='poster-con mt-4'>{`${movie[Math.floor(Math.random()*movie.length)]?.title}`}</div>
                            <div>{`${movie[Math.floor(Math.random()*movie.length)]?.overview?.slice(0,30)}`}...</div>
                        </div>

                    </div>
                    
                </div>
                <h5 style={{color:'orange'}}>Browser Trailers  <i class="fa-solid fa-greater-than fa-2xs"></i></h5>
          </div>

        </Col>
      </Row>
      </Container>
    </>
  )
}

export default Banner