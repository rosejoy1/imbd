import React from 'react'
import {Button} from 'react-bootstrap'
import './Footer.css'
import { Link } from '@mui/material';
function Footer() {
  return (
   <>
      <div  className='d-flex align-items-center justify-content-center' >
        <Button className='b1' style={{border:'none',background:'rgb(253, 179, 40)',color:'black'}} >Sign in for more access</Button>
        
      </div>
      <div  className='logos d-flex align-items-center justify-content-center  mt-3'  >
      <div className='m-4'> <i style={{color:'white'}} class="fa-brands fa-tiktok fa-xl"></i></div>
      <div className='m-4'> <i style={{color:'white'}} class="fa-brands fa-instagram fa-xl"></i></div>
      <div className='m-4'><i style={{color:'white'}} class="fa-brands fa-twitter fa-xl"></i></div>
       <div className='m-4'> <i style={{color:'white'}} class="fa-brands fa-youtube fa-xl"></i></div>
        <div className='m-4'><i style={{color:'white'}} class="fa-brands fa-facebook fa-xl"></i></div>
      </div>

      <div  className='d-flex align-items-center justify-content-center' >
      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Get the IMDb App'} <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
       </Link>
      </div>

      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Help'} <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
       </Link>
      </div>

      
      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Site Index'} <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
       </Link>
      </div>

      
      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'IMDbPro'} <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
       </Link>
      </div>

      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Box Office Mojo'} <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
       </Link>
      </div>

      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'IMDb Developer'} <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
       </Link>
      </div>


      </div>


      <div  className='d-flex align-items-center justify-content-center   ' >
      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Press Room'} 
       </Link>
      </div>

      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Advertising'} <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
       </Link>
      </div>

      
      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Jobs'} <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
       </Link>
      </div>

      
      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Condition of Use'}
       </Link>
      </div>

      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Privacy Policy'}
       </Link>
      </div>

      <div className='m-2'>
        <Link href="#" style={{color:'white'}} underline="hover">
        {'Your Ads Privacy Choices'} <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
       </Link>
      </div>
      </div>

      <div style={{color:'white',fontWeight:'bold'}} className='d-flex align-items-center justify-content-center'>
        <p>An <img style={{width:'60px',height:'25px'}} className='mt-2' src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6-300x114.png" alt="" /> Company</p>
      </div>

      <div style={{fontSize:'15px'}} className='d-flex align-items-center justify-content-center'>
        <p>© 1990-2023 by IMDb.com, Inc.</p>
      </div>
   </>
  )
}

export default Footer