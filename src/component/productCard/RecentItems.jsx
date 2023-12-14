import React from 'react'
import './recentItems.scss'
import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';
export default function RecentItems() {
    return (
        <div className='boxOne recentItems'>
            <div className="inner">
                <div>
                    <div >
                        <h5 >Recent Items</h5>

                    </div>
                    <div class="widget-content">
                        <div class="flex" style={{ flexDirection: 'column' }}>
                            <div class=" flex" style={{ justifyContent: 'space-between' }}>
                                <div className="flex" style={{ gap: "20px" }}>

                                    <img src={product1} alt="" />
                                    <div class="" >
                                        <h5 class="mb-0 mt-1">1005 Farland Street,West Roxbury</h5>
                                        <p className='sub-heading'>05 Jul 2018, Fergus Douchebag</p>
                                    </div>
                                </div>
                                <div className="flex" style={{
                                    justifyContent: 'end', gap: '20px', alignItems: 'center'
                                }}>
                                    <a class="badge green">Completed</a>
                                    <a class="badge yellow">Pending</a>
                                </div>
                            </div>
                            <div class=" flex" style={{ justifyContent: 'space-between' }}>
                                <div className="flex" style={{ gap: "20px" }}>
                                    <img src={product2} alt="" />
                                    <div >
                                        <h5 class="mb-0 mt-1">845 Nrarland Street,east Opobury </h5>
                                        <p className='sub-heading'>12 Jul 2019, Fergus Douchebag</p>
                                    </div>
                                    <div className="flex" style={{
                                        justifyContent: 'end', gap: '20px', alignItems: 'center'
                                    }}>
                                        <a class="badge">Processing</a>
                                        <a class="badge">Done</a>
                                    </div>
                                </div>
                            </div>
                            <div class=" flex" style={{ justifyContent: 'space-between' }}>
                                <div className="flex" style={{ gap: "20px",width: '200%'}}>
                                    <img src={product3} alt="" />
                                    <div >
                                        <h5 class="mb-0 mt-1" >8/D Talbagan Street,North 24 midland Opobury </h5>
                                        <p className='sub-heading'>12 Jul 2019, Jonas Ferguson</p>
                                    </div>
                                    <div className="flex" style={{
                                        justifyContent: 'end', gap: '20px', alignItems: 'center'
                                    }}>
                                        <a class="badge red">Failed</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
