import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { GoArrowUp } from "react-icons/go";
import './box1.scss'
export default function Box1() {
    return (
        <div className='box1'>
            <div className="small-box">
                <div className="upper">
                    <span><FiShoppingCart /></span>
                    <div className="comparison">
                        <p>20%</p>
                        <GoArrowUp />
                    </div>
                </div>
                <div className="lower">
                    <div className="number">2189</div>
                    <p>Products Sold</p>
                </div>
            </div>
        </div>
    )
}
