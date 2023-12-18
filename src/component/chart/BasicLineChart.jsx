// import React from 'react'

// export default function BasicLineChart() {
//   return (
//     <div className='boxOne mt-70'>
//       <div className="inner">
//         <h5>Basic Line Chart</h5>
//         <div className="sub-heading">Product Trends by Month</div>


//       </div>
//     </div>
//   )
// }


import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function BasicLineChart() {
  useEffect(() => {
    const options = {
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      },
    };

    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="boxOne mt-70 w-50">
      <div className="inner">
        <h5>Basic Line Chart</h5>
        <div className="sub-heading">Product Trends by Month</div>
        <div id="chart"></div>
      </div>
    </div>
  );
}
