import React from 'react'
import product1 from '../assets/product-1.jpg'
import product5 from '../assets/product-5.jpg'
export default function Notification() {
    return (
        <div className='boxOne w-50'>
            <div className="inner">
                <div className="justify-between">
                    <h5 className='mb-0'>Notification</h5>
                </div>
                <p className='fw-700 red'>20-04-2020 <span className='fw-500 dark-gray'>10:10</span> </p>
                <div className="primary-text fw-700 mt-1">Updated Product</div>
                <div className="sub-heading">Quisque a consequat ante sit amet magna...</div>
                <p className='fw-700 red'>12-10-2020 <span className='fw-500 dark-gray'>09:16</span></p>
                <div className="primary-text fw-700 mt-1">Tello just like your product</div>
                <div className="sub-heading">Quisque a consequat ante sit amet magna...</div>
                <div className="flex" style={{alignItems:'start', gap:'10px'}}>
                    <div className="img">
                        <img src={product1} width='100%'  className=' border-img p-5'/>
                    </div>
                    <div className="big-img">
                        <img src={product5} className=' border-img p-5' width='500px'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
