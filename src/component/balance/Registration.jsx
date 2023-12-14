// import React from 'react'

// export default function Registration() {
//   return (
//     <div className='boxOne w-33'>
//       <div className="inner">
//         <h5 className='align'>User Registration Types</h5>
//       </div>
//     </div>
//   )
// }


import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function RegistrationWithPieChart() {
    const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [ 25, 45,30,],
                backgroundColor: [
                    'rgb(160, 160, 160)',
                    'rgb(219, 39, 34)',
                    'rgb(36, 75, 131)',
                ],
                borderColor: [
                  '  rgb(160, 160, 160)',
                    'rgb(219, 39, 34)',
                    'rgb(36, 75, 131)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        width: 235,
        height: 235,
    };

    return (
        <div className='boxOne w-33'>
            <div className="inner">
                <h5 className='align'>User Registration Types</h5>
                <div className='justify-center' style={{  height: '235px' }}>
                    <Pie data={data} options={chartOptions} />
                </div>
            </div>
        </div>
    );
}
