import React, { useEffect, useRef, useState } from 'react'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import { MdOutlineHome, MdWidgets } from "react-icons/md";
import { GiBulb } from "react-icons/gi";
import { FaLock, FaRegCopy, FaRegFileCode, FaSitemap } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { PiCompassToolBold } from "react-icons/pi";
import { LiaElementor } from "react-icons/lia";
import { FaWpforms, FaGlobeAmericas, FaChartPie, } from "react-icons/fa";
import { FaTableCells, FaTableCellsLarge } from "react-icons/fa6";
import DashboardSideSubMenu from '../sidesubmenu/DashboardSideSubMenu';

export default function Sidebar() {

    const [showDashboard, setShowDashboard] = useState(false);
    const dashboardRef = useRef(null);

    const toggleDashboard = () => {
        setShowDashboard(!showDashboard);
    };

    const handleClickOutside = (event) => {
        if (dashboardRef.current && !dashboardRef.current.contains(event.target)) {
            setShowDashboard(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className="sidebar">
                <div className="top">
                    <div className="logo">
                        <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/favicon.ico" alt="" width="25px" />
                        <a href="/">Neptune</a>
                    </div>
                    <div className="center">
                        <ul>
                            <li>
                                <span style={{ position: 'relative' }}>
                                    <NavLink to="/" title="Dashboard" onClick={toggleDashboard}>
                                        <MdOutlineHome />
                                    </NavLink>
                                </span>
                                {showDashboard &&
                                    <div ref={dashboardRef}>
                                        <DashboardSideSubMenu />
                                    </div >
                                }
                            </li>


                            <li>
                                <span><NavLink to='/apps' title='Apps'><GiBulb /></NavLink></span>
                            </li>

                            <li>
                                <span><NavLink to='auth' title='Auth Pages'><FaLock /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='other' title='Other Pages'><IoDocumentOutline /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='basicUi' title='Basic UI'><PiCompassToolBold /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='UiElement' title='UI Elements'><LiaElementor /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='forms' title='Forms'><FaWpforms /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='maps' title='Maps'><FaGlobeAmericas /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='charts' title='Charts'><FaChartPie /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='widgets' title='Widgets'><MdWidgets /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='tables' title='Tables'><FaTableCellsLarge /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='datatable' title='Data Tables'><FaTableCells /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='staterKit' title='Stater Kit'><FaRegCopy /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='multiLevel' title='Multi Level'><FaSitemap /></NavLink></span>
                            </li>
                            <li>
                                <span><NavLink to='documentation' title='Documentation'><FaRegFileCode /></NavLink></span>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom">color Option</div>
                </div>
            </div>
        </>
    )
}
