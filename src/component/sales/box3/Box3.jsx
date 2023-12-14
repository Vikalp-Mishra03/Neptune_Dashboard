import React from 'react'
import { GoArrowUp } from "react-icons/go";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import './box3.scss'
export default function Box3() {
    return (
        <div className='box3'>
            <div className="small-box">
                <div className="upper">
                    <span><LiaHandHoldingUsdSolid /></span>
                    <div className="comparison">
                        <p>40%</p>
                        <GoArrowUp />
                    </div>
                </div>
                <div className="lower">
                    <div className="number">$3465</div>
                    <p>Monthly Sales</p>
                </div>
            </div>
        </div>
    )
}
