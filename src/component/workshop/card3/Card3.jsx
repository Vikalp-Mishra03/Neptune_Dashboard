import React from 'react'
import './card3.scss'

export default function Card() {
    return (
        <div className='card'>
            <div className="wrap">
                <div className="img3">
                    <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/user-work-3.png" alt="" height='130px' />
                    <div className="data">
                        <span>40%</span>
                        <div className="progress">
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                </div>
                <div className="info-box3">
                    <div className="card-box">
                        <h3>Creative Workshop</h3>
                        <div className="date">18 September 2021</div>
                    </div>
                    <div className="member3">
                        <div className="members">11 member</div>
                        <div className="member-image">
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-11.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-12.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-13.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-14.jpg" alt="" />
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-15.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

