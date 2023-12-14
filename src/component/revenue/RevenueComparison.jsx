// import React from 'react'
// import './revenueComparison.scss'

// export default function RevenueComparison() {
//     return (
//         <div className='boxOne revenueComparison'>
//             <div className="inner">
//                 <h5>Revenue Comparison</h5>

//             </div>
//         </div>
//     )
// }


import React, { useEffect, useRef } from 'react';
import './revenueComparison.scss';
import ApexCharts from 'apexcharts';
import { LiaBullseyeSolid, LiaFileInvoiceDollarSolid,LiaChartLineSolid } from "react-icons/lia";
export default function RevenueComparison() {
    const chartRef = useRef(null);

    useEffect(() => {
        const options = {
            series: [
                {
                    name: 'series1',
                    data: [31, 40, 28, 51, 42, 109, 100],
                },
                {
                    name: 'series2',
                    data: [11, 32, 45, 32, 34, 52, 41],
                },
            ],
            chart: {
                height: 350,
                type: 'area',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
            },
            xaxis: {
                type: 'datetime',
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
            tooltip: {
                x: {
                    format: 'dd/MM/yy HH:mm',
                },
            },
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        // Clean up function to destroy the chart when the component unmounts
        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div className='boxOne revenueComparison'>
            <div className="inner">
                <h5>Revenue Comparison</h5>
                <div id="chart" ref={chartRef}></div>

                <div className='justify-between'>
                    <div >
                        <div >
                            <div className='align-center'>
                                <div >
                                    <div className='background-round bc-voilet white green'>
                                        <LiaChartLineSolid/>
                                    </div>
                                </div>
                                <div >
                                    <div >
                                        <h6 >$<span data-plugin="counterup">58,947</span></h6>
                                        <p className='sub-heading mb-0'>Total Sales</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div >
                            <div className='align-center'>
                                <div>
                                    <div className='background-round bc-green white green'>
                                        <LiaFileInvoiceDollarSolid />
                                    </div>
                                </div>
                                <div >
                                    <div >
                                        <h6 >$<span data-plugin="counterup">45,458</span></h6>
                                        <p className='sub-heading mb-0'>Total Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div >
                            <div className='align-center'>
                                <div >
                                    <div className='background-round bc-red white'>
                                        <LiaBullseyeSolid />
                                    </div>
                                </div>
                                <div >
                                    <div >
                                        <h6 >$<span data-plugin="counterup">58,000</span></h6>
                                        <p className='sub-heading mb-0'>Target Revenue</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
