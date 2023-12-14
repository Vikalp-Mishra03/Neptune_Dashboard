import React from 'react'
import './totalCustomerIssues.scss'
import { LiaArrowUpSolid } from "react-icons/lia";
export default function TotalCustomerIssues() {
    return (
        <div className='boxOne w-33 TotalCustomerIssues'>
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

                <div className="rem2 font-25 align dark-gray">Total sources</div>
                <h5 className='align'>$ 7652</h5>
                <h6 className='green align'><LiaArrowUpSolid /> 2.2 %</h6>
                <p class="font-13 align mb-1 mt-1 text-muted" style={{ fontSize: '13px' }}><a href="#">Click here</a> to see the full seller list</p>
            </div>
        </div>
    )
}
