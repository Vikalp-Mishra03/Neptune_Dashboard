import React from 'react'
import './summary.scss'
import { PiChartBarThin } from "react-icons/pi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
export default function SalesSummary() {
    return (
        <div className='summary'>
            <div className="inner">
                <h5>Sales Summary</h5>

                <div className="content">
                    <div className="sales">
                        <div className="sales-icons">
                            <PiChartBarThin />
                        </div>
                        <div className="sales-progress">
                            <span>Sales</span>
                            <span className='price'>$8190</span>
                            <div className="progress">
                                <div className="progress-bar"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sales">
                        <div className="sales-icons icons1">
                            <LiaFileInvoiceDollarSolid />
                        </div>
                        <div className="sales-progress">
                            <span>Revenue</span>
                            <span className='price'>$4290</span>
                            <div className="progress">
                                <div className="progress-bar bar2"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sales">
                        <div className="sales-icons icons2">
                            <PiChartBarThin />
                        </div>
                        <div className="sales-progress">
                            <span>Budget</span>
                            <span className='price'>$3333</span>
                            <div className="progress">
                                <div className="progress-bar bar3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sales">
                        <div className="sales-icons icons3">
                            <PiChartBarThin />
                        </div>
                        <div className="sales-progress">
                            <span>Sales</span>
                            <span className='price'>$8190</span>
                            <div className="progress">
                                <div className="progress-bar bar4"></div>
                            </div>
                        </div>
                    </div>
                    <div className="sales">
                        <a href="#" className='btn '>View Full Report</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
