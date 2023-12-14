import React from 'react'
import profile14 from '../assets/profile-14.jpg'

export default function Appointment() {
    return (
        <div className='boxOne w-100'>
            <div className="inner">
                <h5>Appointment</h5>
                <hr />

                <div className="justify-around mt-1 mb-1">
                    <img src={profile14} className='round-img' alt="" />
                    <div>
                        <div className="primary-text">Jennifer Winston, Califonia
                        </div>
                        <div className="sub-heading mb-0">Now</div>
                    </div>
                    <div class="primary-text fw-500 voilet ">28 sept</div>
                    <div className="btn">Done</div>
                </div>

                <hr />

                <div className="justify-around mt-1">
                    <img src={profile14} className='round-img' alt="" />
                    <div>
                        <div className="primary-text">Jennifer Winston, Califonia
                        </div>
                        <div className="sub-heading mb-0">Now</div>
                    </div>
                    <div class="primary-text fw-500 voilet ">28 sept</div>
                    <div className="btn bc-red">Done</div>
                </div>
            </div>
        </div>
    )
}
