import React from 'react'
import './sideSubMenu.scss'
import { Link, NavLink } from 'react-router-dom'


export default function ChartSideSubMenu() {
    return (

        <div class="sidebar-submenu ps">
            <div class="submenu show" id="dashboardMenu">
                <div class="submenu-info">
                    <div class="submenu-inner-info">
                        <h5>Charts</h5>
                        <p>Nemo enim ipsam voluptatem quia voluptas.</p>
                    </div>
                    <ul class="submenu-list">
                        <li >
                            <Link to='/chart'>  Apex Chart </Link>
                        </li>
                        <li>
                            <NavLink to="/home2"> Chartlist Charts </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home3"> ChartJS </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home4"> Morris Charts </NavLink>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}
