// import React from 'react'
// import { LiaArrowUpSolid } from "react-icons/lia";
// export default function Balance() {
//     return (
//         <div className='boxOne w-66'>
//             <div className="inner">
//                 <div className="flex">
//                     <div style={{width:'25%'}}>
//                         <h5 className='mb-1'>Wallet Balance</h5>
//                         <div className="sub-heading mb-0">Available Balance</div>
//                         <div className="rem2 dark-gray">$1,212.00</div>
//                         <div className="sub-heading">+ 123.00 ( 9.2 % ) <LiaArrowUpSolid className='green' /></div>

//                         <div className="justify-between">
//                             <div className="box">
//                                 <div className="sub-heading">Income</div>
//                                 <h5>$6,302</h5>
//                             </div>
//                             <div className="box">
//                                 <div className="sub-heading">Expense</div>
//                                 <h5>$9,204</h5>
//                             </div>
//                         </div>
//                     </div>


//                 </div>
//             </div>
//         </div>

//     )
// }


import React from 'react';
import { LiaArrowUpSolid, LiaSquareSolid } from 'react-icons/lia';
import ReactApexChart from 'react-apexcharts';

export default function BalanceWithChart() {
    const chartData = {
        series: [44, 55, 67, 83],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return 249; // Example custom formatter function
                            },
                        },
                    },
                },
            },
            labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },
    };

    return (
        <div className='boxOne w-66'>
            <div className="inner">
                <h5 className='mb-1'>Wallet Balance</h5>
                <div className="justify-between">
                    <div style={{ width: '25%' }}>
                        <div className="sub-heading mb-0">Available Balance</div>
                        <div className="rem2 dark-gray">$1,212.00</div>
                        <div className="sub-heading">+ 123.00 ( 9.2 % ) <LiaArrowUpSolid className='green' /></div>

                        <div className="justify-between">
                            <div className="box">
                                <div className="sub-heading">Income</div>
                                <h5>$6,302</h5>
                            </div>
                            <div className="box">
                                <div className="sub-heading">Expense</div>
                                <h5>$9,204</h5>
                            </div>
                        </div>
                    </div>

                    <div id="chart">
                        <ReactApexChart options={chartData.options} series={chartData.series} type="radialBar" height={250} />
                    </div>


                    <div >
                        <div >
                            <div className=' mb-1'>
                                <p className='sub-heading  mb-0 green align-center'>
                                    <LiaSquareSolid /> Income
                                </p>
                                <h5>$180
                                    <span className='price'>(75%) for the month of JAN</span>
                                </h5>
                            </div>
                            <div className='mb-1'>
                                <p className='sub-heading  mb-0 yellow align-center'>
                                    <LiaSquareSolid /> Referral
                                </p>
                                <h5>$162
                                    <span className='price'>(67%) for the month of JAN</span>
                                </h5>
                            </div>
                            <div className=' mb-1'>
                                <p className='sub-heading red mb-0 align-center'>
                                    <LiaSquareSolid /> Expense
                                </p>
                                <h5>$200
                                    <span className='price'>(83%) for the month of JAN</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
