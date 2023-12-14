import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';

export default function ProjectSeries() {
  const [options, setOptions] = useState({
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff'],
    },
   
    xaxis: {
      categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
      labels: {
        formatter: function (val) {
          return val + 'K';
        },
      },
    },
    yaxis: {
      title: {
        text: undefined,
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + 'K';
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
  });

  const [seriesData, setSeriesData] = useState([
    {
      name: 'Marine Sprite',
      data: [44, 55, 41, 37, 22, 43, 21],
    },
    {
      name: 'Striking Calf',
      data: [53, 32, 33, 52, 13, 43, 32],
    },
    {
      name: 'Tank Picture',
      data: [12, 17, 11, 9, 15, 11, 20],
    },
    {
      name: 'Bucket Slope',
      data: [9, 7, 5, 8, 6, 9, 4],
    },
    {
      name: 'Reborn Kid',
      data: [25, 12, 19, 32, 25, 24, 10],
    },
  ]);

  useEffect(() => {
 
    setTimeout(() => {
   
      const updatedOptions = { ...options }; 
      const updatedSeriesData = [...seriesData]; 
      setOptions(updatedOptions);
      setSeriesData(updatedSeriesData);
    }, 2000);
  }, []);

  return (
    <div className='boxOne w-33 '>
      <div className="inner">
        <h5>Project Series</h5>
        <div id="chart">
          <Chart
            options={options}
            series={seriesData}
            type="bar"
            height={350}
          />
        </div>
      </div>
    </div>
  );
}
