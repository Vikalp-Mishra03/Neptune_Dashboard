import React from 'react'
import { LiaMapMarkedSolid } from "react-icons/lia";
export default function Sales() {
    return (
        <div className='boxOne w-33'>
            <div className="inner">
                <div className="flex-direction">
                    <div className="icons mt-1 font-45 red">
                        <LiaMapMarkedSolid />
                    </div>
                    <div className="big-text">11,789 Sales</div>
                    <div className="sub-heading mt-1 dark-gray">San Francisco (Top Country)</div>

                    <div class="table-responsive mt-4">
                        <table class="table-bordered">
                            <tbody>
                                <tr>
                                    <td ><p class="mb-0">San Francisco</p></td>
                                    <td ><h5 class="mb-0">11,789</h5></td>
                                    <td>
                                        <div class="w-140 progress mb-0"><div class="progress-bar bc-voilet h-6 br-10  mb-0" style={{ width: '94%' }}></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><p class="mb-0">California</p></td>
                                    <td><h5 class="mb-0">10,952</h5></td>
                                    <td>
                                        <div class=" progress mb-0 w-140"><div class="progress-bar bc-dark-green  h-6 br-10  mb-0" style={{ width: '82%' }}></div></div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><p class="mb-0">Paris</p></td>
                                    <td><h5 class="mb-0">10,075</h5></td>
                                    <td>
                                        <div class="progress w-140 mb-0 h-6 br-10"><div class="progress-bar bc-yellow h-6 br-10 w-70" ></div></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    )
}
