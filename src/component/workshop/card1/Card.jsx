import React from 'react'
import './card.scss'

export default function Card() {
    return (
        <div className='card'>
            <div className="wrap">
                <div className="img">
                    <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/user-work-1.png" alt="" />
                    <div className="data">
                        <span>80%</span>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="info-box">
                    <div className="card-box">
                        <h3>National Seminar</h3>
                        <div className="date">15 December 2021</div>
                    </div>
                    <div className="member">
                        <div className="members">32 member</div>
                        <div className="member-image">
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-1.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-2.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-3.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-4.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-5.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

