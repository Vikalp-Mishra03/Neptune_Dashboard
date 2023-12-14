import React from 'react'
import './topPerformance.scss'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';



const data1 = [
    {
        name: 'Jan',
        totalCommission: 4000,
        totalSales: '1',
        amt: 2400,
    },
    {
        name: 'Feb',
        totalCommission: 3000,
        totalSales: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        totalCommission: 2000,
        totalSales: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        totalCommission: 2780,
        totalSales: 3908,
        amt: 2000,
    },
    {
        name: 'May',
        totalCommission: 1890,
        totalSales: 4800,
        amt: 2181,
    },
    {
        name: 'Jun',
        totalCommission: 2390,
        totalSales: 3800,
        amt: 2500,
    },
    {
        name: 'Jul',
        totalCommission: 3490,
        totalSales: 4300,
        amt: 2100,
    },
    {
        name: 'Aug',
        totalCommission: 3490,
        totalSales: 4300,
        amt: 2100,
    },
    {
        name: 'Sep',
        totalCommission: 3490,
        totalSales: 4300,
        amt: 2100,
    },
    {
        name: 'Oct',
        totalCommission: 3490,
        totalSales: 4300,
        amt: 2100,
    },
    {
        name: 'Nov',
        totalCommission: 3490,
        totalSales: 4300,
        amt: 2100,
    },
    {
        name: 'Dec',
        totalCommission: 3490,
        totalSales: 4300,
        amt: 2100,
    },
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    // lineHeight: '24px',
};

export default function TopPerformance() {
    return (
        <div className='boxOne topPerformance'>
            <div className="inner">
                <h5>Top Seller Performance</h5>

                <div className="map flex">
                    <div class="left-area col-lg-4">
                        <h6 class="mb-0 mt-4">WS Retail</h6>
                        <p className='sub-heading'>Best Seller of the month</p>
                        <h4 class="mt-3">$3,808</h4>
                        <div class="flex">
                            <span class="badge green"> + 25% </span>
                            <span class="sub-heading" style={{ marginBottom: '0' }}>more sales</span>
                        </div>
                        <button class="btn mt-1 mb-1" >View Details</button>
                        <p class="sub-heading">Last Month</p>
                        <p class="sub-heading">$2,405</p>
                    </div>

                    <ResponsiveContainer className="charts" width="100%" height={300}>
                        <LineChart
                            data={data1}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="totalSales" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="totalCommission" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
