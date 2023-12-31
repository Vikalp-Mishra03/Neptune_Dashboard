import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { LiaArrowUpSolid } from "react-icons/lia";
const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


export default function Statistics() {
    return (
        <div className='boxOne w-33 h-400'>
            <div className="inner br-img">
                <h5 className='white'>Statistics</h5>

                <div className="justify-center">
                    <div className="sub-heading mb-0 white">Month</div>
                    <div className="btn1 voilet">Week</div>
                    <div className="sub-heading white mb-0">Day</div>
                </div>
                <div className="justify-center">
                    <div className="rem2 white">$708.89 </div>
                    <LiaArrowUpSolid className='font-35 light-green' />
                </div>

                <div className="center">
                    <div className="sub-heading white">This Week +98.44</div>
                </div>

                <ResponsiveContainer width="100%" height="60%">
                    <LineChart width={300} height={100} data={data}>
                        <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
