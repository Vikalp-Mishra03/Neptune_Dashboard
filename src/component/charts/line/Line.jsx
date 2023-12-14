import React, { useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    RadialBarChart,
    RadialBar,
    ResponsiveContainer,
} from 'recharts';
import './line.scss';
import { RiArrowDropDownLine } from "react-icons/ri";

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

const data = [
    {
        name: '18-24',
        uv: 31.47,
        pv: 2400,
        fill: '#8884d8',
    },
    {
        name: '25-29',
        uv: 26.69,
        pv: 4567,
        fill: '#83a6ed',
    },
    {
        name: '30-34',
        uv: 15.69,
        pv: 1398,
        fill: '#8dd1e1',
    },
    {
        name: '35-39',
        uv: 8.22,
        pv: 9800,
        fill: '#82ca9d',
    },
   
];

const style = {
    top: '50%',
    right: 0,
    transform: 'translate(0, -50%)',
    // lineHeight: '24px',
};

export default function LineChartComponent() {

    const [showOption, setShowOption] = useState(false);

    const toggleOption = () => {
        setShowOption(!showOption);
    };

    return (
        <>
            <div className="big-chart">
                <div className='chart'>
                    <div className="widget" >
                        <div className="top">
                            <div className="left">
                                <h5>Monthly Transaction</h5>
                            </div>
                            <div className="right">
                                <div className="option" onClick={toggleOption}>
                                    <p>Options</p>
                                    {showOption && (
                                        <div className="options">
                                            <ul>
                                                <li>Quartely</li>
                                                <li>Half Yearly</li>
                                                <li>Mail</li>
                                                <li>Print</li>
                                                <li>Download</li>
                                                <li>Share</li>
                                            </ul>
                                        </div>
                                    )}
                                    <RiArrowDropDownLine />
                                </div>
                            </div>

                        </div>
                        <div className="price">$9,789</div>
                        <p>Monthly Revenue</p>
                        <ResponsiveContainer className="charts" width="100%" height="70%">
                            <LineChart
                                width={500}
                                height={300}
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
                    </ div>
                </div>
                <div className="round-chart">
                    <div className="widgets">
                        <div className="top">Top Countries by Sales</div>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
                                <RadialBar
                                    minAngle={15}
                                    label={{ position: 'insideStart', fill: '#fff' }}
                                    background
                                    clockWise
                                    dataKey="uv"
                                />
                                <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />
                            </RadialBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div >
        </>
    );
}
