import React from 'react'
import './sold.scss'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LiaChevronCircleDownSolid, LiaChevronCircleUpSolid } from "react-icons/lia";

const data = [
  {

    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {

    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {

    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {

    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {

    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {

    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {

    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Sold() {
  return (
    <div className='sold'>
      <div className="inner">
        <h5>Item Sold</h5>
        <div className="sub-heading">Calculated in last 7 days</div>

        <ResponsiveContainer width="100%" height="50%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="" />
            {/* <XAxis dataKey="name" /> */}
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="rgb(0, 150, 136)" />
            <Bar dataKey="uv" stackId="a" fill="rgb(231, 81, 90)" />
          </BarChart>
        </ResponsiveContainer>

        <div className="best-selling">
          <div className="sellings">
            <LiaChevronCircleUpSolid />
            <div className="selling">
              <span>Best Selling</span>
              <p>Wednesday</p>
            </div>
          </div>
          <div className="price">67</div>
        </div>
        <div className="worst-selling">
          <div className="sellings">
            <LiaChevronCircleDownSolid />
            <div className="selling">
              <span>Worst Selling</span>
              <p>Friday</p>
            </div>
          </div>
          <div className="price">21</div>
        </div>
      </div>
    </div>
  )
}
