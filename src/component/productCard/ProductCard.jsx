import React from 'react';
import './producCard.scss';
import { LiaChartBar } from "react-icons/lia";

export default function ProductCard(props) {
    const { title, quantity, subHeading, color,backgroundColor } = props;
    return (
        <div className='boxOne productCard'>
            <div className="inner">
                <h5>{title}</h5>
                <div className="flex font-35" style={{justifyContent:'space-between'}}>
                    <p style={{ color: color }}>{quantity}</p>
                    <LiaChartBar style={{ color: color }} />

                </div>
                <div className="sub-heading" >{subHeading}</div>
                <div className="btn" style={{ backgroundColor: backgroundColor }}>View Details</div>
            </div>
        </div>
    )
}
