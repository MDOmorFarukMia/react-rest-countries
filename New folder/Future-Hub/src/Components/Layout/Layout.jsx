import React from 'react'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <div className="App">
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout