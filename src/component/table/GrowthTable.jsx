import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const GrowthTable = () => {
    const [chartData, setChartData] = useState({
        series: [67],
        options: {
            chart: {
                height: 250,
                type: 'radialBar',
                offsetY: -10
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 135,
                    dataLabels: {
                        name: {
                            fontSize: '16px',
                            color: undefined,
                            offsetY: 120
                        },
                        value: {
                            offsetY: 76,
                            fontSize: '22px',
                            color: undefined,
                            formatter: function (val) {
                                return val + '%';
                            }
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    shadeIntensity: 0.15,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 65, 91]
                }
            },
            stroke: {
                dashArray: 4
            },
            labels: ['Median Ratio']
        }
    });

    return (
        <div className='growthtable'>
            <div id="chart">
                <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="radialBar"
                    height={250}
                />
            </div>

            <div class="table-responsive">
                <table class="table-bordered">
                    <thead>
                        <tr>
                            <th><div>Expense</div></th>
                            <th ><div>Amount</div></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Office</td>
                            <td>$799.00</td>
                        </tr>
                        <tr>
                            <td>Misc</td>
                            <td >$3500.00</td>
                        </tr>
                        <tr>
                            <td class="strong">Total</td>
                            <td class="strong">$4299.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GrowthTable;
