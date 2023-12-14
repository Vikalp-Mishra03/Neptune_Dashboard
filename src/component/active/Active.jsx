import React, { useState } from 'react';
import './active.scss'
import ReactApexChart from 'react-apexcharts';
export default function Active() {

  const [chartData, setChartData] = useState({
    series: [75],
    options: {
      chart: {
        height: 175,
        type: 'radialBar',
        toolbar: {
          show: true
        }
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px'
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent'],
    },
  });

  return (
    <div className='activ'>
      <div className="inner">
        <h5>Active Status</h5>
        <div className="sub-heading">Users</div>

        <div className="boc">
          <div className="row">
            <div id="card" style={{ width: '200px', height: '175px' }}>
              <div id="chart">
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="radialBar"
                  height={chartData.options.chart.height}
                />
              </div>
            </div>

            <div className="user-info">

              <div className="user">
                <h6>Active Users</h6>
                <div className="info">
                  <div className="no">32,678</div>
                  <div className="sub-heading heading">Email Accounts</div>
                  <div className="price">75%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar1"></div>
                </div>
              </div>

              <div className="user">
                <div className="info">
                  <div className="no">3,717</div>
                  <div className="sub-heading heading">Pending Request</div>
                  <div className="price">25%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="user-info">

              <div className="user">
                <h6>Deactive Users</h6>
                <div className="info">
                  <div className="no">12,678</div>
                  <div className="sub-heading heading">Email Accounts</div>
                  <div className="price">35%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar1"></div>
                </div>
              </div>

              <div className="user">
                <div className="info">
                  <div className="no">35,710</div>
                  <div className="sub-heading heading">Pending Request</div>
                  <div className="price">65%</div>
                </div>
                <div className="progress">
                  <div className="progress-bar progress-bar2"></div>
                </div>
              </div>
            </div>

            <div id="card" style={{ width: '200px', height: '175px' }}>
              <div id="chart">
                <ReactApexChart
                  options={chartData.options}
                  series={chartData.series}
                  type="radialBar"
                  height={chartData.options.chart.height}
                />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
