import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function RadialBar() {
  useEffect(() => {
    const options = {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return 249; // Example: You can change this value based on your data
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };

    const chart = new ApexCharts(document.querySelector("#chart14"), options);
    chart.render();

   
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='boxOne w-50'>
      <div className="inner">
        <h5>Radial Bar</h5>
        <div id="chart14"></div>
      </div>
    </div>
  );
}
