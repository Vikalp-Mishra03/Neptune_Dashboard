import React from 'react'
import './project.scss'
import profile4 from '../assets/profile-4.jpg'
import profile5 from '../assets/profile-5.jpg'
import profile6 from '../assets/profile-6.jpg'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import profile7 from '../assets/profile-7.jpg'
import profile8 from '../assets/profile-8.jpg'
import profile9 from '../assets/profile-9.jpg'
import profile10 from '../assets/profile-10.jpg'
import profile11 from '../assets/profile-11.jpg'
import profile12 from '../assets/profile-12.jpg'
import profile13 from '../assets/profile-13.jpg'
import profile14 from '../assets/profile-14.jpg'
import profile15 from '../assets/profile-15.jpg'
import profile16 from '../assets/profile-16.jpg'
import profile17 from '../assets/profile-17.jpg'


export default function Project() {
    return (
        <div className='projects'>
            <div className="inner">
                <h5>Projects</h5>
                <div>
                    <div className="table-responsive">
                        <table className="table-bordered">
                            <thead>
                                <tr>
                                    <th>
                                        <div>Name</div>
                                    </th>
                                    <th>
                                        <div>Starts Date</div>
                                    </th>
                                    <th><div>Ends on</div></th>
                                    <th><div>Team</div></th>
                                    <th><div>Status</div></th>
                                    <th><div>Client</div></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Android App Development</td>
                                    <td>Jun 20, 2018</td>
                                    <td>Dec 21, 2020</td>
                                    <td>
                                        <div className='flex' style={{ justifyContent: 'center' }}>
                                            <a href="#" title="" data-original-title="Jeremy Lawson">
                                                <img src={profile4} className='table-img' />
                                            </a>
                                            <a href="#" title="" data-original-title="Dino Morea">
                                                <img src={profile5} className='table-img' />
                                            </a>

                                            <a href="#" title="" data-original-title="Anna Ivanovic">
                                                <img src={profile6} className='table-img' /></a>
                                            <span className="avatar">+4</span>
                                        </div>
                                    </td>
                                    <td><span className="badge badge-info"> Ongoing </span></td>
                                    <td>RN Groups</td>
                                </tr>
                                <tr>
                                    <td>Angular Frontend</td>
                                    <td>Aug 23, 2019</td>
                                    <td>Jan 01, 2020</td>
                                    <td>
                                        <div className='flex' style={{ justifyContent: 'center' }} >
                                            <a href="#" data-original-title="Dean Jones">
                                                <img src={profile1} className='table-img' />
                                            </a>
                                            <a href="#" title="" data-original-title="Smirti Mandhana">
                                                <img src={profile2} className='table-img' />
                                            </a>
                                            <a href="#" >
                                                <img src={profile3} className='table-img' />
                                            </a>
                                            <span className='avatar'>+2</span>
                                        </div>
                                    </td>
                                    <td><span className="badge badge-info"> Ongoing </span></td>
                                    <td>Bose</td>
                                </tr>
                                <tr>
                                    <td>Java Backend</td>
                                    <td>Feb 20, 2018</td>
                                    <td>Dec 21, 2019</td>
                                    <td>
                                        <div className="flex" style={{ justifyContent: 'center' }}>
                                            <a href="#"><img src={profile7} className='table-img' /></a>
                                            <a href="#"><img src={profile8} className='table-img' /></a>
                                            <a href="#"><img src={profile9} className='table-img' /></a>
                                            <span className='avatar'>+9</span>
                                        </div>
                                    </td>
                                    <td><span className="badge badge-success-teal"> Completed </span></td>
                                    <td>Reliance</td>
                                </tr>
                                <tr>
                                    <td>AWS Server Migration</td>
                                    <td>Sep 20, 2018</td>
                                    <td>Mar 21, 2020</td>
                                    <td>
                                        <div>
                                            <a href="#"><img src={profile10} className='table-img' /></a>
                                            <a href="#"><img src={profile11} className='table-img' /></a>
                                            <a href="#"><img src={profile12} className='table-img' /></a>
                                        </div>
                                    </td>
                                    <td><span className="badge badge-warning"> Pending </span></td>
                                    <td>Amazon</td>
                                </tr>
                                <tr>
                                    <td>Firbase Backup</td>
                                    <td>Jan 20, 2020</td>
                                    <td>Mar 21, 2020</td>
                                    <td>
                                        <div >
                                            <a href="#"><img src={profile13} className='table-img' /></a>
                                            <a href="#"><img src={profile14} className='table-img' /></a>
                                        </div>
                                    </td>
                                    <td><span className="badge badge-danger"> Cancelled </span></td>
                                    <td>Corporation</td>
                                </tr>
                                <tr>
                                    <td>iOS Swift</td>
                                    <td>Jun 20, 2017</td>
                                    <td>Dec 21, 2020</td>
                                    <td>
                                        <div className='flex' style={{ justifyContent: 'center' }}>
                                            <a href="#"><img src={profile15} className='table-img' /></a>
                                            <a href="#"><img src={profile16} className='table-img' /></a>
                                            <a href="#"><img src={profile17} className='table-img' /></a>
                                            <span className='avatar'>+5</span>
                                        </div>
                                    </td>
                                    <td><span className="badge badge-info"> Ongoing </span></td>
                                    <td>Umbrella</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
