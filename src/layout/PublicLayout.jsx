import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/static/Footer'
import Header from '../components/static/Header'

function PublicLayout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default PublicLayout