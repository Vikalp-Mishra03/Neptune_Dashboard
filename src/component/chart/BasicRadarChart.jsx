import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function BasicRadarChart() {
  useEffect(() => {
    const options = {
      series: [{
        name: 'Series 1',
        data: [80, 50, 30, 40, 100, 20],
      }],
      chart: {
        height: 350,
        type: 'radar',
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May', 'June']
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart13"), options);
    chart.render();

    // Clean up chart on unmount (optional)
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='boxOne w-50'>
      <div className="inner">
        <h5>Basic Radar Chart</h5>
        {/* Include a div to render the chart */}
        <div id="chart13"></div>
      </div>
    </div>
  );
}
