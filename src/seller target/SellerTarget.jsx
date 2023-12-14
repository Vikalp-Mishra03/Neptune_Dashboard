import React from 'react'
import profile6 from '../component/assets/profile-6.jpg'
import profile5 from '../component/assets/profile-5.jpg'
import profile3 from '../component/assets/profile-3.jpg'
import profile13 from '../component/assets/profile-13.jpg'

export default function SellerTarget() {
    return (
        <div className='boxOne' style={{ width: '50%' }}>
            <div className="inner">
                <h5>Seller Target</h5>
                <div class="table-responsive">
                    <table class="table-bordered">
                        <thead>
                            <tr>
                                <th><div class="th-content">Seller Info</div></th>
                                <th><div class="th-content">Progress</div></th>
                                <th><div class="th-content">Sales</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="flex">
                                        <img className='round-img' src={profile6} alt="avatar" />
                                        <p class="mb-0">Connor Mcguere</p>
                                    </div>
                                </td>
                                <td>
                                    <div class="progress">
                                        <div class="progress-bar"></div>
                                    </div>
                                </td>
                                <td><span class="text-warning">29.56%</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="flex">
                                        <img className='round-img' src={profile5} alt="avatar" />
                                        <p class="mb-0">Johny Borja</p>
                                    </div>
                                </td>
                                <td>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" ></div>
                                    </div>
                                </td>
                                <td><span class="text-success-teal">92.89%</span></td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="flex">
                                        <img className='round-img' src={profile3} alt="avatar" />
                                        <p class="mb-0">Dingo Hernandes</p>
                                    </div>
                                </td>
                                <td>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" ></div>
                                    </div>
                                </td>
                                <td><span class="text-info">62.01%</span></td>
                            </tr>
                            <tr class="border-bottom border-light">
                                <td>
                                    <div class="flex">
                                        <img className='round-img' src={profile13} alt="avatar" />
                                        <p class="mb-0">Kristopher Benny</p>
                                    </div>
                                </td>
                                <td>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" ></div>
                                    </div>
                                </td>
                                <td><span class="text-danger">15.28%</span></td>
                            </tr>
                        </tbody>
                    </table>
                    <p class="font-13 text-center mt-4 mb-1 text-muted" style={{fontSize:'13px'}}>
                        <a  href="#">Click here</a> to see the full seller list
                    </p>
                </div>
            </div>
        </div>
    )
}
