import React from 'react'
import './reference.scss'
import { CiMobile1, CiLaptop, CiCamera } from "react-icons/ci";
import { LuBookDown } from "react-icons/lu";
export default function Reference() {
    return (
        <div className='reference'>
            <div className="inner box">
                <div className="containers">
                    <CiMobile1 />
                </div>
                <div className="right">
                    <div className="data">
                        <h6 className='color3'>Mobile</h6>
                        <p>Total 758 Sold</p>
                    </div>
                    <div className="price">$2899</div>
                </div>
            </div>
            <div className="inner box">
                <div className="containers">
                    <CiLaptop />
                </div>
                <div className="right">
                    <div className="data">
                        <h6 className='color3'>Laptop</h6>
                        <p>Total 68 Sold</p>
                    </div>
                    <div className="price">$2141</div>
                </div>
            </div>
            <div className="inner box">
                <div className="containers book">
                    <LuBookDown />
                </div>
                <div className="right">
                    <div className="data">
                        <h6 className='color2'>Books</h6>
                        <p>Total 435 Sold</p>
                    </div>
                    <div className="price">$1122</div>
                </div>
            </div>
            <div className="inner box mb">
                <div className="containers camera">
                    <CiCamera />
                </div>
                <div className="right">
                    <div className="data">
                        <h6 className='color3'>Camera</h6>
                        <p>Total 123 Sold</p>
                    </div>
                    <div className="price">$231</div>
                </div>
            </div>
        </div>
    )
}
