import React from 'react'
import './issues.scss'


export default function Issues() {
    return (
        <div className='issues'>
            <div className="inner">
                <h5>Total Customer Issues</h5>
                <div className="sub-heading">Year 2020</div>

                <div className="customer-issue">
                    <div className="customer-issue-list">
                        <div className="customer-issue-info">
                            <h6 className='color'>Resolved</h6>
                            <p className='color'>69000</p>
                        </div>
                        <div className="customer-issue-stats">
                            <div className="progress">
                                <div className="progress-bar"></div>
                            </div>
                        </div>
                    </div>

                    <div className="customer-issue-list">
                        <div className="customer-issue-info color1">
                            <h6 className='text-[#5c1ac3] text-[30px] color1'>In Progress</h6>
                            <p className='color1'>2500</p>
                        </div>
                        <div className="customer-issue-stats">
                            <div className="progress">
                                <div className="progress-bar progress1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="customer-issue-list">
                        <div className="customer-issue-info">
                            <h6 className='color3'>Pending</h6>
                            <p className='color3'>8500</p>
                        </div>
                        <div className="customer-issue-stats">
                            <div className="progress">
                                <div className="progress-bar progress2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
