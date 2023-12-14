import React from 'react'
import profile4 from '../assets/profile-4.jpg'
import profile5 from '../assets/profile-5.jpg'
import profile6 from '../assets/profile-6.jpg'
import profile7 from '../assets/profile-7.jpg'
import profile8 from '../assets/profile-8.jpg'
import profile9 from '../assets/profile-9.jpg'
import profile10 from '../assets/profile-10.jpg'
import profile11 from '../assets/profile-11.jpg'
import profile12 from '../assets/profile-12.jpg'
import profile13 from '../assets/profile-13.jpg'
import profile14 from '../assets/profile-14.jpg'
import profile15 from '../assets/profile-15.jpg'

import './dayschedule.scss'

export default function DaySchedule() {
    return (
        <div className='boxOne w-33 daysSchedule'>
            <div className="inner">
                <h5>Schedule</h5>
                <div className="sub-heading">Today's Schedule</div>
                <div className="justify-between mt-1 mb-1">
                    <div className="flex-direction">
                        <div >
                            <h6 className="font-size-12">Skype call with Ruby</h6>
                            <p className="mb-0 dark-gray"><span className="bc-voilet badge1 white mr-1">11:45 am</span> USA</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <a href="#" >
                            <img src={profile4} alt="avatar" />
                        </a>
                        <a href="#" >
                            <img src={profile5} alt="avatar" />
                        </a>
                        <a href="#">
                            <img src={profile6} alt="avatar" />
                        </a>
                    </div>
                </div>
                <div className="justify-between mt-1 mb-1">
                    <div className="flex-direction">
                        <div >
                            <h6 className="font-size-12">Meeting with Team</h6>
                            <p className="mb-0 dark-gray"><span className="bc-sky-blue  badge1 white mr-1">10:30 am</span> Caneda</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <a href="#" >
                            <img src={profile7} alt="avatar" />
                        </a>
                        <a href="#" >
                            <img src={profile8} alt="avatar" />
                        </a>
                        <a href="#">
                            <img src={profile9} alt="avatar" />
                        </a>
                    </div>
                </div>
                <div className="justify-between mt-1 mb-1">
                    <div className="flex-direction">
                        <div >
                            <h6 className="font-size-12">Analysing with Client</h6>
                            <p className="mb-0 dark-gray"><span className="bc-yellow  badge1 white mr-1">02: 00 pm</span> Africa</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <a href="#" >
                            <img src={profile10} alt="avatar" />
                        </a>
                        <a href="#" >
                            <img src={profile11} alt="avatar" />
                        </a>
                        <a href="#">
                            <img src={profile12} alt="avatar" />
                        </a>
                    </div>
                </div>
                <div className="justify-between mt-1 mb-1">
                    <div className="flex-direction">
                        <div >
                            <h6 className="font-size-12">Meeting with Team</h6>
                            <p className="mb-0 dark-gray"><span className="bc-dark-green  badge1 white mr-1">03: 30 pm</span> Africa</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <a href="#" >
                            <img src={profile13} alt="avatar" />
                        </a>
                        <a href="#" >
                            <img src={profile14} alt="avatar" />
                        </a>
                        <a href="#">
                            <img src={profile15} alt="avatar" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
