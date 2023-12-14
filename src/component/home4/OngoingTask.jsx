import React from 'react'
import profile1 from '../assets/profile-1.jpg'
import profile2 from '../assets/profile-2.jpg'
import profile3 from '../assets/profile-3.jpg'
import profile4 from '../assets/profile-3.jpg'

export default function OngoingTask() {
    return (
        <div className='boxOne w-33'>
            <div className="inner">
                <h5>Ongoing Task</h5>
                <div className="sub-heading">System Team</div>

                <div className="flex mt-1 mb-1">
                    <div className=" "><img src={profile1} alt="story-img" className="round-img" /></div>
                    <div className="">
                        <h6 className="">Make New Home Page</h6>
                        <p className="dark-gray" style={{fontSize:' 0.875rem' }}>Feb 14, 2020</p>
                    </div>
                </div>
                <div className="flex mt-1 mb-1">
                    <div className=" "><img src={profile2} alt="story-img" className="round-img" /></div>
                    <div className="">
                        <h6 className="">Redesign the Dashboard</h6>
                        <p className="dark-gray" style={{fontSize:' 0.875rem' }}>Feb 12, 2020</p>
                    </div>
                </div>
                <div className="flex mt-1 mb-1">
                    <div className=" "><img src={profile3} alt="story-img" className="round-img" /></div>
                    <div className="">
                        <h6 className="">Analysis New Product</h6>
                        <p className="dark-gray" style={{fontSize:' 0.875rem' }}>Feb 10, 2020</p>
                    </div>
                </div>

                <div className="flex mt-1 mb-1">
                    <div className=" "><img src={profile4} alt="story-img" className="round-img" /></div>
                    <div className="">
                        <h6 className="">Make New Home Page</h6>
                        <p className="dark-gray" style={{fontSize:' 0.875rem' }}>Feb 14, 2020</p>
                    </div>
                </div>
                <div className="flex mt-1 mb-1">
                    <div className=" "><img src={profile1} alt="story-img" className="round-img" /></div>
                    <div className="">
                        <h6 className="">Make New Home Page</h6>
                        <p className="dark-gray" style={{fontSize:' 0.875rem' }}>Feb 14, 2020</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
