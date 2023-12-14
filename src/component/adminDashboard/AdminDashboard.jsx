import React from 'react'
import './adminDashboard.scss'
import profile16 from '../assets/profile-16.jpg'
export default function AdminDashboard() {
    return (
        <div className='boxOne' style={{ marginTop: '80px' }}>
            <div className="inner">
                <div>
                    <div class="row">
                        <div class="col-4">
                            <div class="media">
                                <div style={{ marginRight: '1rem' }}>
                                    <img src={profile16} className='round-img img-thumbnail' />
                                </div>
                                <div >
                                    <div >
                                        <p>Welcome to dashboard</p>
                                        <h5>Sara</h5>
                                        <p>System Admin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="align">
                            <div style={{ marginTop: '0', textAlign: 'center' }}>
                                <div class="project-info">
                                    <div class="col-3">
                                        <div>
                                            <p>Projects</p>
                                            <h5>48</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Team</p>
                                            <h5>40</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Clients</p>
                                            <h5>18</h5>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <p>Sellers</p>
                                            <h5>98</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex', flexDirection: 'column', gap: '20px',
                            marginLeft: '100px',
                            marginRright: '35px'
                        }}>
                            <button class="btn btn-primary">
                                Settings
                            </button>
                            <button class="btn btn-info mt-2">
                                My Chat
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
