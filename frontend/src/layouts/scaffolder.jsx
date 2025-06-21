import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Outlet } from 'react-router-dom'


const Scaffolder = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />    
    </>
  )
}

export default Scaffolder