import React from 'react'
import './weather.scss'
import { IoSunnyOutline } from "react-icons/io5";
import { LiaMoonSolid, LiaCloudRainSolid, LiaTintSolid, LiaWindSolid, LiaCloudMoonRainSolid, LiaCloudMoonSolid, LiaCloudSunSolid, LiaCloudSunRainSolid } from "react-icons/lia";

export default function Weather() {
    return (
        <div className='boxOne weather'>
            <div className="inner">
                <div className="flex" style={{ marginBottom: '1.5rem', justifyContent: 'space-between' }}>
                    <h5>Weather Report</h5>
                    <p>Sydney, Australia</p>
                </div>
                <div class="widget-content">
                    <div class="monthly-weather-report">
                        <div className='weather-report' style={{ justifyContent: 'space-between' }}>
                            <div className='boxOne'>
                                <div className='temperature-box center'>
                                    <div className='temperature-box-icon' >
                                        <IoSunnyOutline />
                                    </div>
                                    <div className='temperature-box-content'>
                                        <div >
                                            <span className='yellow' style={{ fontSize: '65px' }}>18°C</span>
                                        </div>
                                        <div className='temp-bottom'>
                                            <a className='sub-heading'>Yesterday - <span className='voilet' style={{ fontWeight: '600' }}>24°C</span></a>
                                            <a className='sub-heading'>Tomorrow - <span className='voilet' style={{ fontWeight: '600' }}>22°C</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='boxOne weathers'>
                                <div className='monthly-weather-report'>
                                    <div className='w-33 boxOne'>
                                        <div className='flex'>
                                            <span className='yellow  weather-icons'>
                                                <IoSunnyOutline />
                                            </span>
                                            <div class="media-body">
                                                <h5>Warm</h5>
                                                <p className='sub-heading'>Clear</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-33 boxOne'>
                                        <div className='flex'>
                                            <span className='  weather-icons'>
                                                <LiaMoonSolid />
                                            </span>
                                            <div class="media-body">
                                                <h5>Night</h5>
                                                <p className='sub-heading'>Pleasant</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-33 boxOne'>
                                        <div className='flex'>
                                            <span className=' sky-blue weather-icons'>
                                                <LiaCloudRainSolid />
                                            </span>
                                            <div class="media-body">
                                                <h5>Cloudy</h5>
                                                <p className='sub-heading'>Raining</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-33 boxOne'>
                                        <div className='flex'>
                                            <span className=' sky-blue weather-icons'>
                                                <LiaTintSolid />
                                            </span>
                                            <div class="media-body">
                                                <h5>58%</h5>
                                                <p className='sub-heading'>Humidity</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-33 boxOne'>
                                        <div className='flex'>
                                            <span className='light-gray weather-icons '>
                                                <LiaWindSolid />
                                            </span>
                                            <div class="media-body">
                                                <h5>17 mph%</h5>
                                                <p className='sub-heading'>Wind Speed</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-33 boxOne'>
                                        <div className='flex'>
                                            <span className='sky-blue weather-icons '>
                                                <LiaCloudMoonRainSolid />
                                            </span>
                                            <div class="media-body">
                                                <h5>29.57 ml</h5>
                                                <p className='sub-heading'> Rainfall</p>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gradient' style={{ marginBottom: '1rem' }}>
                        <div>
                            <div class="">
                                <div className='flex' style={{ padding: '1rem', justifyContent: 'space-around' }}>
                                    <div >
                                        <h6>Mon</h6>
                                        <div className='flex'>
                                            <span style={{ fontSize: '35px' }}><LiaCloudMoonSolid /></span>
                                            <div >
                                                <h6 >58°F</h6>
                                                <p >28°C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h6 >Tue</h6>
                                        <div className='flex'>
                                            <span style={{ fontSize: '35px' }}><LiaCloudSunSolid /></span>
                                            <div >
                                                <h6 >60°F</h6>
                                                <p >29°C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <h6 >Wed</h6>
                                        <div className='flex'>
                                            <span style={{ fontSize: '35px' }}><LiaCloudMoonSolid /></span>
                                            <div >
                                                <h6 >62°F</h6>
                                                <p >30°C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h6 >Thu</h6>
                                        <div className='flex'>
                                            <span style={{ fontSize: '35px' }}><LiaCloudSunSolid /></span>
                                            <div>
                                                <h6 >40°F</h6>
                                                <p >19°C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <h6 >Fri</h6>
                                        <div className='flex'>
                                            <span style={{ fontSize: '35px' }}><LiaCloudSunRainSolid /></span>
                                            <div >
                                                <h6 >62°F</h6>
                                                <p >23°C</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <h6 >Sat</h6>
                                        <div className='flex'>
                                            <span style={{ fontSize: '35px' }}><LiaCloudMoonSolid /></span>
                                            <div >
                                                <h6 >58°F</h6>
                                                <p >28°C</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
