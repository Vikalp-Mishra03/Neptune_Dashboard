import React from 'react'

export default function Service(props) {
    const { icon, service, para, time, day } = props
    return (
        <div className='boxOne w-25'>
            <div className="inner">
                <div className="icon font-45 dark-gray">{icon}</div>
                <div className="big-text ">{service}</div>
                <p className='primary-text mt-1'>{para}</p>

                <div className="justify-between">
                    <div className="primary-text mt-1">{time}</div>
                    <div className="primary-text mt-1">{day}</div>
                </div>
            </div>
        </div>
    )
}
