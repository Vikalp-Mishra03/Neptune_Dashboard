import React from 'react'
import './sideSubMenu.scss'
import { Link, NavLink } from 'react-router-dom'


export default function BasicUisideSubMenubar() {
    return (

        <div class="sidebar-submenu ps">
            <div class="submenu show" id="dashboardMenu">
                <div class="submenu-info">
                    <div class="submenu-inner-info">
                        <h5>Basic UI</h5>
                        <p>At vero eos et accusamus et iusto odio.</p>
                    </div>
                    <ul class="submenu-list">
                        <li >
                            <Link to='/'> Accordions </Link>
                        </li>
                        <li>
                            <NavLink to="/home2"> Animation </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bootstrap"> Bootstrap Cards </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home4"> Carousel </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Countdown </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Counter </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Drag Items </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Lightbox </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Lightbox Side Open </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> List Group </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Media Object </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Modals </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Notifications </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Scroll Spy </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Session Timeout </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Sweet Alerts </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Tabs </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home5"> Tour Tutorial </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
