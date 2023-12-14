// import React from 'react'

// export default function Pie() {
//     return (
//         
//     )
// }

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie as PieChart } from 'react-chartjs-2';
import './pie.scss'

ChartJS.register(ArcElement, Tooltip, Legend);

const pieData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

export function PieComponent() {
    return (
        <div className='pie'>
            <div className="inner">
                <h5>User Registration Types</h5>
                <div style={{ width: '300px' }}>
                    <PieChart data={pieData} />
                </div>
            </div>
        </div>
    )
}
