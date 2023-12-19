import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function DonutChart() {
  useEffect(() => {
    const options = {
      series: [44, 55, 41, 17, 15],
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            // width: 150,
            height: 300,
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    const chart = new ApexCharts(document.querySelector("#chart16"), options);
    chart.render();

    // Clean up chart on unmount (optional)
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='boxOne w-50'>
      <div className="inner">
        <h5>Donut Chart</h5>
        <div id="chart16"></div>
      </div>
    </div>
  );
}
