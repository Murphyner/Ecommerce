import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/static/Footer'
import Header from '../components/static/Header'
import { ToastContainer } from 'react-toastify'

function PublicLayout() {

  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname])

  return (
    <>
        <ToastContainer />
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default PublicLayout