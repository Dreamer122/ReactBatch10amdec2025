import React from 'react'
import { Navbar } from '../Components/Navbar.jsx'
import { Footer } from '../Components/Footer.jsx'
import { Outlet } from 'react-router'
export const Layout = () => {
  return (
    <>
    
    <Navbar />
    <Outlet />
    <Footer />
    </>
  
  )
}
