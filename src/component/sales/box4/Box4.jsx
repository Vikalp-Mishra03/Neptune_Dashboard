import React from 'react'
import { GoArrowDown } from "react-icons/go";
import { LiaUserPlusSolid } from "react-icons/lia";
import './box4.scss'
export default function Box4() {
    return (
        <div className='box4'>
            <div className="small-box">
                <div className="upper">
                    <span><LiaUserPlusSolid /></span>
                    <div className="comparison">
                        <p>50%</p>
                        <GoArrowDown />
                    </div>
                </div>
                <div className="lower">
                    <div className="number">35</div>
                    <p>New Customers</p>
                </div>
            </div>
        </div>
    )
}
