import React from 'react'
import './card2.scss'

export default function Card() {
    return (
        <div className='card'>
            <div className="wrap">
                <div className="img2">
                    <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/user-work-2.png" alt="" height='130px' />
                    <div className="data">
                        <span>67%</span>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="info-box2">
                    <div className="card-box">
                        <h3>Creative Workshop</h3>
                        <div className="date">15 August 2021</div>
                    </div>
                    <div className="member2">
                        <div className="members">22 member</div>
                        <div className="member-image">
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-6.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-7.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-8.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-9.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-10.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

