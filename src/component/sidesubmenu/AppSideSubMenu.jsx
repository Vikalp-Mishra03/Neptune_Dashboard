import React from 'react'
import './sideSubMenu.scss'
import { NavLink } from 'react-router-dom'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AppSideSubMenu() {
    return (

        <div class="sidebar-submenu ps">
            <div class="submenu show" id="dashboardMenu">
                <div class="submenu-info">
                    <div class="submenu-inner-info">
                        <h5>Apps</h5>
                        <p>Sed ut perspiciatis unde omnis iste.</p>
                    </div>
                    <ul class="submenu-list">
                        <li style={{ marginLeft: '15px' }}>
                            <NavLink to='/calender'> Calender </NavLink>
                        </li>
                        <li style={{ marginLeft: '15px' }}>
                            <NavLink to="/chats"> Chat </NavLink>
                        </li>

                        <li>
                            <Accordion style={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Companies</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <li>List</li>
                                        <li>Details</li>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li style={{ marginLeft: '15px' }}>
                            <NavLink to="/contact"> Contacts </NavLink>
                        </li>

                        <li>
                            <Accordion style={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Ecommerce</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <li>Dashboard</li>
                                        <li>Products</li>
                                        <li>Product Details</li>
                                        <li>Add Product</li>
                                        <li>Orders</li>
                                        <li>Order Details</li>
                                        <li>Customers</li>
                                        <li>Sellers</li>
                                        <li>Cart</li>
                                        <li>Checkout</li>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li>
                            <Accordion style={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Email</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <li>Inbox</li>
                                        <li>Items Details</li>
                                        <li>Compose Email</li>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li style={{ marginLeft: '15px' }}>
                            <NavLink to="/home2"> File Manager </NavLink>
                        </li>

                        <li style={{ marginLeft: '15px' }}>
                            <NavLink to="/home2"> Invoice List </NavLink>
                        </li>

                        <li>
                            <Accordion style={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Notes</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <li>List</li>
                                        <li>Notes Details</li>
                                        <li>Create Note</li>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </li>

                        <li style={{ marginLeft: '15px' }}>
                            <NavLink to="/home2">Social </NavLink>
                        </li>

                        <li style={{ marginLeft: '15px' }}>
                            <NavLink to="/home2">Task List </NavLink>
                        </li>

                        <li>
                            <Accordion style={{ boxShadow: 'none' }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Tickets</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        <li>Ticket List</li>
                                        <li>Ticket Details</li>
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
