import React from 'react'
import profile21 from '../assets/profile-21.jpg'
import { LiaUserSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
export default function DesignerProfile() {
    return (
        <div className='boxOne designerProfile w-33'>
            <div className="inner">
                <div>
                    <div style={{ float: 'right' }}>
                        <span class="badge1">Designer</span>
                    </div>
                    <div className='userProfile'>
                        <img src={profile21} alt="Avatar" className='round img-thumbnail' />
                        <h5 >Oliver Murphy</h5>
                        <a href="#" style={{ fontSize: ' 0.875rem' }}>@oliver_murphy</a>
                        <div className='align-center mt-1'>
                            <div >
                                <div className='align-center'>
                                    <button type="button" class="badge1  combination-v">
                                        <LiaUserSolid />
                                    </button>
                                    <div >
                                        <h5 className='mb-0'>365k</h5>
                                        <span className='sub-heading'>Followers</span>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <div className='align-center '>
                                    <button type="button" class="badge1 combination-v">
                                        <FaStar />
                                    </button>
                                    <div >
                                        <h5 className='mb-0'>4.7</h5>
                                        <span className='sub-heading'>Ratings</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h6 className='mt-1 mb-1'>
                        <span>Today's Earnings</span>
                        <small class="ml-1 sub-heading">$25k</small>
                    </h6>
                    <div className='flex progress' style={{ height: '16px', borderRadius: '16px' }}>
                        <div className="progressbar font-11 center voilet" style={{ width: '30%', fontWeight: '600', backgroundColor: '#f6f1ff' }}>30%</div>
                        <div className="progressbar font-11 center green" style={{ width: '20%', fontWeight: '600', backgroundColor: '#e6ffbf' }}>20%</div>
                        <div className="progressbar font-11 center sky-blue" style={{ width: ' 35%', fontWeight: '600', backgroundColor: '#bae7ff' }}>35%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
