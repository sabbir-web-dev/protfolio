import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navber from '../Components/Navber/Navber'

function PageRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navber />} />
    </Routes>
      
    </BrowserRouter>
  )
}

export default PageRoutes
