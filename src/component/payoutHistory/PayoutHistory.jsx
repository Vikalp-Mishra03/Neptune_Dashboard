import React from 'react'
import './payoutHistory.scss'
import { GoPencil } from "react-icons/go";
import { GoTrash } from "react-icons/go";

export default function PayoutHistory() {
    return (
        <div className='payoutHistory'>
            <div className="inner">
                <h5>Payout History</h5>

                <div className="table-responsive">
                    <table className="table-bordered" style={{marginBottom: '1.9rem'}}>
                        <thead>
                            <tr>
                                <th><div className="content">Client</div></th>
                                <th><div className="content">Payouts</div></th>
                                <th><div className="content">Status</div></th>
                                <th><div className="content">Action</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Johnson &amp; Johnson</td>
                                <td>$2,189</td>
                                <td><span className="badge"> Processing </span></td>
                                <td>
                                    <div className='center font-12'>
                                        <a href="#" className='voilet'><GoPencil /></a>
                                        <a href="#" className='danger'><GoTrash /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>UC Corporation</td>
                                <td>$9,189</td>
                                <td><span className="badge" style={{ border: '1px solid #e2a03f', color: '#e2a03f' }}> Pending </span></td>
                                <td>
                                    <div className='center font-12'>
                                        <a href="#" className='voilet'><GoPencil /></a>
                                        <a href="#" className='danger'><GoTrash /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Web-o-Soft</td>
                                <td>$2,189</td>
                                <td><span className="badge" style={{ border: '1px solid #009688', color: '#009688' }}> Completed </span></td>
                                <td>
                                    <div className='center font-12' >
                                        <a href="#" className='voilet'><GoPencil /></a>
                                        <a href="#" className='danger'><GoTrash /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Sun Pharma</td>
                                <td>$12,189</td>
                                <td><span className="badge" style={{ border: '1px solid #e2a03f', color: '#e2a03f' }}> Pending </span></td>
                                <td>
                                    <div className='center font-12'>
                                        <a href="#" className='voilet'><GoPencil /></a>
                                        <a href="#" className='danger'><GoTrash /></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Sandisko</td>
                                <td>$19,189</td>
                                <td><span className="badge"> Processing </span></td>
                                <td>
                                    <div className='center font-12' >
                                        <a href="#" className='voilet'><GoPencil /></a>
                                        <a href="#" className='danger'><GoTrash /></a>
                                    </div>
                                </td>
                            </tr>
                        </tbody >
                    </table >
                </div >
            </div >
        </div >
    )
}
