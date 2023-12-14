import React from 'react'
import './pending.scss'
import Dashboard from '../assets/dashboard-image-uw.png'
export default function PendingTask() {
    return (
        <div className='boxOne pendingTask'>
            <div className="inner Task">
                <div class="row">
                    <div class="col-7">
                        <div class="white">
                            <h5>Pending Tasks !</h5>
                            <p class="blink">Deadline Tomorrow</p>
                            <ul style={{ paddingLeft: '1rem' }}>
                                <li>Seller Payments</li>
                                <li>Check Payouts</li>
                            </ul>
                        </div>
                    </div>
                    <div class="self-end">
                        <img src={Dashboard} alt="" class="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    )
}
