import React from 'react'
import './dashboard3.scss'
import CountUp from 'react-countup';

export default function Dashboard3(props) {

    const { title, price, dollar, k, brief, icons, angleIcon, percantage } = props;

    return (
        <div className='boxOne dashboard3'>
            <div className="inner">
                <div className="justify-between">
                    <h6 >{title}</h6>
                    {icons}
                </div>
              
                    <h2 className="align voilet mt-1 mb-1" style={{ fontSize: '2rem', fontWeight: '500' }}>{dollar}<CountUp delay={0.2} end={price} duration={1} /> {k}</h2>
                    
               
                <div className="justify-between">
                    <div className="sub-heading mb-0">{brief}</div>
                    <div className="sub-heading mb-0 align-center">{angleIcon}
                        {percantage}</div>
                </div>
            </div>
        </div>
    )
}
