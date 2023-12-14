import React from 'react'
import Sidebar from '../../component/sidebar/Sidebar'
import Navbar from '../../component/navbar/Navbar'
import './app.scss'

export default function Apps() {
  return (
    <div className="apps">
            <Sidebar />

            <div className="appsContainer">
                <Navbar />

                <div className="container">
                    container
                </div>
            </div >
            
        </div>
  )
}