import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home2 from './home/Home2'
import Home3 from './home/Home3'

export default function DashboardsideMenu() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home2' element={<Home2 />} />
          <Route path='/home3' element={<Home3 />} />
          
        </Routes>
      </Router>
    </div>
  )
}
