import React from 'react'
import './sideSubMenu.scss'
import { NavLink } from 'react-router-dom'
import Login from '../login/Login'
export default function AuthPageSidesubpage() {
    return (

        <div class="sidebar-submenu ps">
            <div class="submenu show" id="dashboardMenu">
                <div class="submenu-info">
                    <div class="submenu-inner-info">
                        <h5>Auth Pages</h5>
                        <p>Quis autem vel eum iure reprehenderit.</p>
                    </div>
                    <ul class="submenu-list">
                        <li style={{ marginLeft: '15px' }}>
                            <a href='/login'> Login </a>
                        </li>
                        <li style={{ marginLeft: '15px' }}>
                            <NavLink to="/register"> Register </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


