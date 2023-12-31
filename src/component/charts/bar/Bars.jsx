import React, { PureComponent } from 'react'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './bar.scss'
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    vv:4300,
    pp:4300,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    vv:4300,
    pp:4300,
    amt: 2210,
  },
  {
    name: 'Page C',
    vv:4300,
    pp:4300,
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    vv:4300,
    pp:4300,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    vv:4300,
    pp:4300,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    vv:4300,
    pp:4300,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    vv:4300,
    pp:4300,
    amt: 2100,
  },
];

export default function Bars() {
  return (
    <div className='bars'>
      <div className="wrapper">
        <h5>Order Status</h5>
        <ResponsiveContainer className='contain' width="100%" height="100%">
          <BarChart className='barChart'
            width={500}
            height={300}
            data={data}
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            <Bar dataKey="vv" fill="#E2A03F" activeBar={<Rectangle fill="pink" stroke="blue" />} />
            <Bar dataKey="pp" fill="#E75117" activeBar={<Rectangle fill="gold" stroke="purple" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
