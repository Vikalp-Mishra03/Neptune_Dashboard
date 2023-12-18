import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

export default function SteplineChart() {
  useEffect(() => {
    const options = {
      series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
      }],
      chart: {
        type: 'line',
        height: 350
      },
      stroke: {
        curve: 'stepline',
      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: 'Stepline Chart',
        align: 'left'
      },
      markers: {
        hover: {
          sizeOffset: 4
        }
      }
    };

    const chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();


    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className='boxOne mt-70 w-50'>
      <div className="inner">
        <h5>Stepline Chart</h5>
        <div className="sub-heading">Current year sales</div>
        <div id="chart3"></div>
      </div>
    </div>
  );
}
