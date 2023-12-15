// import React, { useState } from 'react'
// import './growth.scss'
// import { RiArrowDropDownLine } from "react-icons/ri";
// export default function Growth() {

//     const [showGrowth, setShowGrowth] = useState(false);

//     const toggleGrowth = () => {
//         setShowGrowth(!showGrowth);
//     };

//     return (
//         <div className='growth'>
//             <div className="inner">
//                 <div className="heading">
//                     <div className="dropdown" onClick={toggleGrowth}>
//                         <span>2020 <RiArrowDropDownLine /></span>

//                         {showGrowth && (
//                             <div className="box">
//                                 <div className="inner">
//                                     <div className=" drop-menu">
//                                         <a href="#">2019</a>
//                                         <a href="#">2018</a>
//                                         <a href="#">2017</a>
//                                         <a href="#">2016</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>

//                 <div className="content">
//                     <div id="chart1">
//                     </div>

//                 </div>
//             </div>
//         </div>
//     )
// }




import React, { useState, useEffect } from 'react';
import './growth.scss';
import { RiArrowDropDownLine } from 'react-icons/ri';
import ApexCharts from 'apexcharts';

export default function Growth() {
    const [showGrowth, setShowGrowth] = useState(false);

    const toggleGrowth = () => {
        setShowGrowth(!showGrowth);
    };

    useEffect(() => {
        const options = {
            series: [67],
            chart: {
                height: 350,
                type: 'radialBar',
                offsetY: -10,
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120,
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                                return val + '%';
                            },
                        },
                    },
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91],
                },
            },
            stroke: {
                dashArray: 4,
            },
            labels: ['Median Ratio'],
        };

        const chart = new ApexCharts(document.querySelector('#chart1'), options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className="growth ">
            <div className="inner">
                <div className="heading">
                    <div className="dropdown" onClick={toggleGrowth}>
                        <span>
                            2020 <RiArrowDropDownLine />
                        </span>

                        {showGrowth && (
                            <div className="box">
                                <div className="inner">
                                    <div className="drop-menu">
                                        <a href="#">2019</a>
                                        <a href="#">2018</a>
                                        <a href="#">2017</a>
                                        <a href="#">2016</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="content" style={{ height: '120px' }}>
                    <div id="chart1"></div>
                </div>
            </div>
        </div>
    );
}
