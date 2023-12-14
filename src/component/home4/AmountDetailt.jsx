import React from 'react'

export default function AmountDetailt(props) {

    const { style, AmountDetail, amount, place, paymentReport, icon, textColor } = props

    return (
        <div className='boxOne '>
            <div className="inner justify-between" style={style}>
                <div>
                    <div className="primary-text mt-1" style={textColor}>{AmountDetail}</div>
                    <div className="rem2">${amount}</div>
                    <h6>{place}</h6>
                    <p>{paymentReport}</p>
                </div>
                <div className="icon font-45">{icon}</div>
            </div>
        </div>
    )
}
