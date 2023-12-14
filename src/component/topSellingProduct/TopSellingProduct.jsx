import React from 'react'
import { FaStar } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import './topSellingProduct.scss'
export default function TopSellingProduct() {
    return (
        <div className='boxOne'>
            <div className="inner">
                <h5>Top Selling Products</h5>

                <div class="table-responsive">
                    <table class="table-bordered">
                        <thead>
                            <tr>
                                <th><div class="content">Product Info</div></th>
                                <th><div class="content">Price</div></th>
                                <th><div class="content">Quantity</div></th>
                                <th><div class="content">Amount</div></th>
                                <th><div class="content">User Rating</div></th>
                                <th><div class="content">Action</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Zen 2389 Mobile
                                </td>
                                <td>$999</td>
                                <td>58</td>
                                <td>$12,989</td>
                                <td>
                                    <div class="center font-12 ">
                                        5 <FaStar className='star' />
                                    </div>
                                </td>
                                <td>
                                    <div class="center" style={{fontSize:'20px' }}>
                                        <a href="#" ><FaEye /></a>
                                        <a href="#"><GoPencil /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Lenovo G-30 Laptop</td>
                                <td>$1999</td>
                                <td>58</td>
                                <td>$102,989</td>
                                <td>
                                    <div class="center font-12">
                                        5  <FaStar className='star' />
                                    </div>
                                </td>
                                <td>
                                    <div class="center" style={{fontSize:'20px' }}>
                                        <a href="#" >
                                            <FaEye /></a>
                                        <a href="#"><GoPencil /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Half Sleeve Shirt</td>
                                <td>$499</td>
                                <td>50</td>
                                <td>$25,989</td>
                                <td>
                                    <div class="center font-12">
                                        4 <FaStar className='star' />
                                    </div>
                                </td>
                                <td>
                                    <div class="center" style={{fontSize:'20px' }}>
                                        <a href="#" ><FaEye /></a>
                                        <a href="#" ><GoPencil /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Leather Shoes</td>
                                <td>$899</td>
                                <td>80</td>
                                <td>$95,989</td>
                                <td>
                                    <div class="center font-12">
                                        5  <FaStar className='star' />
                                    </div>
                                </td>
                                <td>
                                    <div class="center" style={{fontSize:'20px' }}>
                                        <a href="#"><FaEye /></a>
                                        <a href="#"><GoPencil /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr class="border-bottom border-light">
                                <td>Lightweight Jacket</td>
                                <td>$20</td>
                                <td>184</td>
                                <td>$5,989</td>
                                <td>
                                    <div class="center font-12">
                                        5 <FaStar className='star' />
                                    </div>
                                </td>
                                <td>
                                    <div class="center" style={{fontSize:'20px' }}>
                                        <a href="#"><FaEye /></a>
                                        <a href="#" ><GoPencil /></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={{fontSize:'13px'}}>
                        <a  href="#" >Click here</a> to see the full product list
                    </p>
                </div>
            </div>
        </div>
    )
}
