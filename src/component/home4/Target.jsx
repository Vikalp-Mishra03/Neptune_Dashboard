import React from 'react'

export default function Target(props) {

    const { icons, counting, subHeading, count, style, iconStyle } = props

    return (
        <div className='boxOne w-50' style={{ marginTop: '70px' }}>
            <div className="inner">
                <div className="justify-between">
                    <div className="background-round align-center center" style={iconStyle}>
                        {icons}
                    </div>
                    <h4 className='mb-0'>{counting}</h4>
                </div>
                <p className='sub-heading' style={{ float: 'right' }}>{subHeading}</p>

                <div className="justify-between">
                    <h6>Target</h6>
                    <span>{count}</span>
                </div>

                <div className="progress mt-1 br-10">
                    <div className="progress-bar br-10" style={style}></div>
                </div>
            </div>
        </div>
    )
}
