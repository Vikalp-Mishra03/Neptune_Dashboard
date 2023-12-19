import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function NegativeBarChart() {
  useEffect(() => {
    const options = {
      series: [{
        name: 'Males',
        data: [ 4.2, 4.5, 3.9, 3.5, 3]
      },
      {
        name: 'Females',
        data: [ -4, -4.1, -3.4, -3.1, -2.8]
      }],
      chart: {
        type: 'bar',
        height: 350,
        stacked: true
      },
      colors: ['#008FFB', '#FF4560'],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val) {
            return val
          }
        },
        y: {
          formatter: function (val) {
            return Math.abs(val) + "%"
          }
        }
      },
      xaxis: {
        categories: ['20-24', '15-19', '10-14', '5-9',
          '0-4'
        ],
        title: {
          text: 'Percent'
        },
        labels: {
          formatter: function (val) {
            return Math.abs(Math.round(val)) + "%"
          }
        }
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart10"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='boxOne w-50'>
      <div className="inner">
        <h5>Negative Bar Chart</h5>
       
        <div id="chart10"></div>
      </div>
    </div>
  );
}
