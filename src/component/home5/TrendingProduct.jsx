import React from 'react'
import product1 from '../assets/product-1.jpg'
import product2 from '../assets/product-2.jpg'
import product3 from '../assets/product-3.jpg'
import product4 from '../assets/product-4.jpg'
import product5 from '../assets/product-5.jpg'
import './trendingProduct.scss'
import { LiaArrowRightSolid } from "react-icons/lia";

export default function TrendingProduct() {
    return (
        <div className='boxOne trendingProduct' style={{ width: '58.333333%' }}>
            <div className="inner">
                <h5>Trending Product</h5>
                <hr />
                <div className="table-responsive" >
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="text-center">
                                        <img src={product1} alt="" />
                                    </div>
                                </td>
                                <td className='flex-direction' style={{ alignItems: 'start', marginLeft: '20px', paddingTop: '15px' }}>
                                    <a href="#" className="primary-text">Vivamus consectetur</a>
                                    <span className="sub-heading mb-0">Pharetra, Nulla , Nec</span>
                                </td>
                                <div className="big-box">
                                    <td className="">
                                        <span className="">
                                            California
                                        </span>
                                    </td>
                                    <td className="">
                                        <span className="badge bc-voilet white badge-primary">Approved</span>
                                    </td>
                                    <td >
                                        <a href="#" className='font-25'>
                                            <LiaArrowRightSolid />
                                        </a>
                                    </td>
                                </div>
                            </tr>

                            <hr />
                            <tr>
                                <td>
                                    <div className="text-center">
                                        <img src={product2} className="avatar-md object-cover" alt="" />
                                    </div>
                                </td>
                                <td className='flex-direction' style={{ alignItems: 'start', marginLeft: '20px', paddingTop: '15px' }}>
                                    <a href="#" className="primary-text">Biuasht Hiopuiai</a>
                                    <span className="sub-heading mb-0">Jio, Kilukta, Angola</span>
                                </td>
                                <div className="big-box">

                                    <td >
                                        <span className="text-muted strong">
                                            Tokyo
                                        </span>
                                    </td>
                                    <td >
                                        <span className="badge white bc-yellow ">Pending</span>
                                    </td>
                                    <td >
                                        <a href="#" className='font-25'>
                                            <LiaArrowRightSolid />
                                        </a>
                                    </td>
                                </div>
                            </tr>
                            <hr />
                            <tr>
                                <td >
                                    <div className="text-center">
                                        <img src={product3} className="avatar-md object-cover" alt="" />
                                    </div>
                                </td>
                                <td className='flex-direction' style={{ alignItems: 'start', marginLeft: '20px', paddingTop: '15px' }}>
                                    <a href="#" className="primary-text">Diar Vogilo Product</a>
                                    <span className="sub-heading mb-0">Dinajpur, Garia</span>
                                </td>
                                <div className="big-box">
                                    <td >
                                        <span className="text-muted strong">
                                            Kolkata
                                        </span>
                                    </td>
                                    <td >
                                        <span className="badge bc-red white">Failed</span>
                                    </td>
                                    <td >
                                        <a href="#" className='font-25'>
                                            <LiaArrowRightSolid />
                                        </a>
                                    </td>
                                </div>
                            </tr>
                            <hr />
                            <tr>
                                <td>
                                    <div className="text-center">
                                        <img src={product4} className="avatar-md object-cover" alt="" />
                                    </div>
                                </td>
                                <td className='flex-direction' style={{ alignItems: 'start', marginLeft: '20px', paddingTop: '15px' }}>
                                    <a href="#" className="primary-text">Las Hathplay</a>
                                    <span className="sub-heading mb-0">Dakshindari, Bagan</span>
                                </td>
                                <div className="big-box">

                                    <td >
                                        <span className="text-muted strong">
                                            Vigamox
                                        </span>
                                    </td>
                                    <td >
                                        <span className="badge bc-sky-blue white badge-info">Processing</span>
                                    </td>
                                    <td >
                                        <a href="#" className='font-25'>
                                            <LiaArrowRightSolid />
                                        </a>
                                    </td>
                                </div>
                            </tr>
                            <hr />
                            <tr>
                                <td >
                                    <div className="text-center">
                                        <img src={product5} className="avatar-md object-cover" alt="" />
                                    </div>
                                </td>
                                <td className='flex-direction' style={{ alignItems: 'start', marginLeft: '20px', paddingTop: '15px' }}>
                                    <a href="#" className="primary-text">Clarion Orpat</a>
                                    <span className="sub-heading mb-0">New Garia</span>
                                </td>
                                <div className="big-box">

                                    <td >
                                        <span className="text-muted strong">
                                            Refresh
                                        </span>
                                    </td>
                                    <td >
                                        <span className="badge bc-green white badge-success-teal">Completed</span>
                                    </td>
                                    <td >
                                        <a href="#" className='font-25'>
                                            <LiaArrowRightSolid />
                                        </a>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                    <p class="font-13 text-center mt-4 mb-1 text-muted" style={{ fontSize: '13px' }}><a href="#">Click here</a> to see the full seller list</p>
                </div>
            </div>
        </div>
    )
}
