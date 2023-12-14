// import React from 'react'
// import './orders.scss'
// import { CiShoppingCart } from "react-icons/ci";
// import { LiaAngleUpSolid } from "react-icons/lia";
// export default function Orders() {
//     return (
//         <div className='boxOne order'>
//             <div className="inner">
//                 <div class="flex" style={{ marginBottom: '1rem' }}>
//                     <div style={{ marginRight: '1rem' }}>
//                         <span class="background-round ">
//                             <CiShoppingCart />
//                         </span>
//                     </div>
//                     <h5>Orders</h5>
//                 </div>
//                 <div>
//                     <h5>1,452
//                         <LiaAngleUpSolid className='green' style={{paddingTop:'5px'}}/>
//                     </h5>
//                     <div class="flex" style={{gap:'10px'}}>
//                         <span class="badge"> + 0.2% </span>
//                         <span className='sub-heading' style={{marginBottom:'0'}}>From last month</span>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     )
// }


// Orders.js

import React from 'react';
import './orders.scss';

export default function Orders({ orderData }) {
    return (
        <div className='boxOne order'>
            <div className='inner'>
                {orderData.map((order, index) => (
                    <div key={index} className='flex order' style={{ marginBottom: '1rem', color: order.color}}>
                        <div className="top-row">
                            <div style={{ marginRight: '1rem' }}>
                                <span className='background-round'>{order.icon}</span>
                            </div>
                            <h5>{order.title}</h5>
                        </div>
                        <div>
                            <h5 style={{float:'left'}}>
                                {order.quantity}
                                {order.increaseIcon}
                            </h5>
                            <div className='flex' style={{ gap: '10px' }}>
                                <span className='badge'>{order.badge}</span>
                                <span className='sub-heading' style={{ marginBottom: '0' }}>
                                    {order.subHeading}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


// Orders.js
