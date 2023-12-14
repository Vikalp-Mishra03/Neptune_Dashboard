import React from 'react'
import { GoArrowDown } from "react-icons/go";
import { BsBox2 } from "react-icons/bs";
import './box2.scss'
export default function Box2() {
    return (
        <div className='box2'>
            <div className="small-box">
                <div className="upper">
                    <span><BsBox2 /></span>
                    <div className="comparison">
                        <p>10%</p>
                        <GoArrowDown />
                    </div>
                </div>
                <div className="lower">
                    <div className="number">450</div>
                    <p>New Orders</p>
                </div>
            </div>
        </div>
    )
}
