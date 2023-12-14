import React from 'react'
import './award.scss'

export default function Award() {
    return (
        <div className='award'>
            <div className="inner">
                <div className="upper">
                    <h5>Best CSE of the month</h5>
                    <div className="sub-heading">Victor Smith</div>
                </div>

                <div className="down">
                    <div className="col">
                        <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/trophy.png" alt="" />
                    </div>
                    <div className="col right">
                        <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-1.jpg" alt="" />
                        <h1>12481</h1>
                        <p>queries resolved</p>
                        <a href="#" className='btn'>View All</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
