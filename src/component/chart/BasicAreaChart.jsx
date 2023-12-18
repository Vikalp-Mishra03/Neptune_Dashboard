import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function BasicAreaChart() {
  useEffect(() => {
   
    const samplePrices = [10, 20, 15, 25, 18, 30, 28];
    const sampleDates = ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05', '2023-01-06', '2023-01-07'];

    const options = {
      series: [{
        name: "STOCK ABC",
        data: samplePrices
      }],
      chart: {
        type: 'area',
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
      },
      subtitle: {
        text: 'Price Movements',
        align: 'left'
      },
      labels: sampleDates,
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: 'left'
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart4"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='boxOne w-50'>
      <div className="inner">
        <h5>Basic Area Chart</h5>
      
        <div id="chart4"></div>
      </div>
    </div>
  );
}
