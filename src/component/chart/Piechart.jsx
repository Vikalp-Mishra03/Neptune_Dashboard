import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function Piechart() {
  useEffect(() => {
    const options = {
      series: [44, 55, 13, 43, 22],
      chart: {
        // width: 380,
        height: 320,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            // height: 300,
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chart = new ApexCharts(document.querySelector("#chart15"), options);
    chart.render();

   
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='boxOne w-50'>
      <div className="inner">
        <h5>Pie Chart</h5>
        <div id="chart15"></div>
      </div>
    </div>
  );
}
