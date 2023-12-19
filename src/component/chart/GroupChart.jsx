import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function GroupChart() {
  useEffect(() => {
    const options = {
      series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      chart: {
        type: 'bar',
        height: 350,
        // width: 600,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: '12px',
          colors: ['#fff']
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
      },
      tooltip: {
        shared: true,
        intersect: false
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart9"), options);
    chart.render();

    
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='boxOne w-50'>
      <div className="inner">
        <h5>Grouped Bar Chart</h5>
       
        <div id="chart9"></div>
      </div>
    </div>
  );
}
