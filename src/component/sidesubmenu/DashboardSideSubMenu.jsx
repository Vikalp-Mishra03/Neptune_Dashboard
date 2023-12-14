import React from 'react'
import './sideSubMenu.scss'
import { Link, NavLink } from 'react-router-dom'


export default function DashboardSideSubMenu() {
    return (

        <div class="sidebar-submenu ps">
            <div class="submenu show" id="dashboardMenu">
                <div class="submenu-info">
                    <div class="submenu-inner-info">
                        <h5>Dashboard</h5>
                        <p>Lorem ipsum dolor sit sed ametctetur elit.</p>
                    </div>
                    <ul class="submenu-list">
                        <li >
                            <Link to='/'> Dashboard 1 </Link>
                        </li>
                        <li>
                            <NavLink to="/home2"> Dashboard 2 </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home3"> Dashboard 3 </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home4"> Dashboard 4 </NavLink>
                        </li>
                        <li>
                            <a href="index-5.html"> Dashboard 5 </a>
                        </li>
                    </ul>
                    {/* <Router>
                        <Routes>
                            <Route path='/home2' element={<Home2 />} />
                        </Routes>
                    </Router> */}

                </div>
            </div>
        </div>
    )
}
