import React from 'react'
import './expenseTable.scss'

export default function ExpenseTable() {
    return (
        <div className='Expensetable'>
            <div className="layout-spacing">
                <div className="table-responsive">
                    <table className="table-bordered">
                        <thead>
                            <tr>
                                <th>
                                    <div className="th-content">Last Month Expense</div>
                                </th>
                                <th><div className="th-content">Amount</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Subscription</td>
                                <td style={{ textAlign: "right" }}>$99.00</td>
                            </tr>
                            <tr>
                                <td>Server Cost</td>
                                <td style={{ textAlign: "right" }}>$999.00</td>
                            </tr>
                            <tr>
                                <td>Hosting</td>
                                <td style={{ textAlign: "right" }}>$71.00</td>
                            </tr>
                            <tr>
                                <td>Electricity</td>
                                <td style={{ textAlign: "right" }}>$59.00</td>
                            </tr>
                            <tr>
                                <td>Office</td>
                                <td style={{ textAlign: "right" }}>$199.00</td>
                            </tr>
                            <tr>
                                <td>Misc</td>
                                <td style={{ textAlign: "right" }}>$599.00</td>
                            </tr>
                            <tr>
                                <td className="strong">Total</td>
                                <td className="strong" style={{ textAlign: "right" }}>$2026.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <span className="" style={{ fontSize: '15px', color: '#888ea8' }}>
                        <small className="strong" style={{ marginRight: '10px', fontsize: '15px', fontweight: '600', color: ' #0e1726', marginright: '0.5rem', }}>$2,026</small>
                        Total Expense</span>
                    <span className="price" >65%</span>
                    <div className="progress">
                        <div className="progress-bar" style={{ width: '75%' }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
