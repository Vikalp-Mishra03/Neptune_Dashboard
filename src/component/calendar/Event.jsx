import React from 'react'

export default function Event() {
    return (
        <div className='boxOne mt-70 w-25'>
            <div className="inner">
                <div className="sub-heading">Event List</div>
                <div className="btn br-0 mt-1 bc-dark-green ">Update Successful</div>
                <div className="btn br-0 mt-1 bc-sky-blue">Another Event</div>
                <div className="btn br-0 mt-1 bc-yellow white">Conference</div>
                <div className="btn br-0 mt-1 bc-red mb-1">Error Solve</div>

                <h4 className='align mt-2 dark-gray'>How To Use ?</h4>

                <ul className='pl-15'>
                    <li className='primary-text mt-1 gray'>Drag and drop event from calender or click in the calendar.</li>
                    <li className='primary-text mt-1 gray'>Change view by clicking month, week or day tab</li>
                    <li className='primary-text mt-1 gray'>Click on today button to see the current date</li>
                    <li className='primary-text mt-1 gray'>Use Right and Left arrow to change months</li>
                </ul>
            </div>
        </div>
    )
}
