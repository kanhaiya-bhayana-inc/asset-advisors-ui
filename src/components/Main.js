import React from 'react'
import { Outlet } from 'react-router-dom'
import Home from './Home/Home'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function Main() {
    // let footerStyle = {
    //     minHeight: "75.2vh",
    //     margin: "50px auto",
    //   };
  return (
    <>
    <div className='bg-light'>
        
    <Navbar/>
    {/* <div style={footerStyle}> */}
        
    <Outlet/>
    <Footer/>
    {/* </div> */}
    </div>
    </>
  )
}
