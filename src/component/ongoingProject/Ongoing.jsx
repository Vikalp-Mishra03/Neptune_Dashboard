import React from 'react'
import './ongoing.scss'
import { CiClock2 } from 'react-icons/ci'
export default function Ongoing() {
    return (
        <div className='ongoing'>
            <div className="inner">
                <h5>Ongoing Project</h5>
                <div className="sub-heading">Overview of this month</div>

                <div className="box7">
                    <span className='primary'>Node.js Project</span>
                    <span className="success"><CiClock2/> 5 days ago</span>
                    <h6 class="muted">Started on : 03/05/2020</h6>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="box7">
                    <span className='primary'>Swift Project</span>
                    <span className="success success1"><CiClock2/> 19 days ago</span>
                    <h6 class="muted">Started on : 13/03/2020</h6>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <div className="box7">
                    <span className='primary'>Angular Project</span>
                    <span className="success"><CiClock2/> 1 days ago</span>
                    <h6 class="muted">Started on : 30/04/2020</h6>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </div>
    )
}
