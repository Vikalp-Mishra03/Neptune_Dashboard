import React from 'react'
import './topSellingProduct.scss'
import product1 from '../assets/product-1.jpg'
import product4 from '../assets/product-4.jpg'

export default function TopSellingProduct() {
    return (
        <div className='boxOne topSellingProduct'>
            <div className="inner align">
                <h5>Top Selling Product</h5>
                <div class="widget-content mt-4">
                    <img src={product1} class="round-img img-thumbnail" />
                        <h6>Product One</h6>
                        <p class="dark-gray">$5,458</p>
                        <div class="flex center mt-1 ">
                            <span class="badge badge-success font-size-12"> + 25% </span>
                            <span class="sub-heading mb-0">From last month</span>
                        </div>
                        <img src={product4} class="round-img img-thumbnail mt-1"/>
                            <h6 class="text-center mt-2">Product Two</h6>
                            <p class="text-center">$5,458</p>
                            <div class="flex center mt-1 mb-1">
                                <span class="badge"> - 25% </span>
                                <span class="sub-heading mb-0">From last month</span>
                            </div>
                        </div>
                </div>
            </div>
            )
}
