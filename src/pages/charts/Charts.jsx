import React, { useEffect, useState } from 'react';
import '../home/home.scss';
import Loader from '../../component/loader/Loader';
import Navbar from '../../component/navbar/Navbar';

import Footer from '../../component/footer/Footer';
import BasicLineChart from '../../component/chart/BasicLineChart';
import LineWithDataLable from '../../component/chart/LineWithDataLable';
import Dashed from '../../component/chart/Dashed';
import SteplineChart from '../../component/chart/SteplineChart';
import BasicAreaChart from '../../component/chart/BasicAreaChart';
import SplineChart from '../../component/chart/SplineChart';
import NegativeAreaChart from '../../component/chart/NegativeAreaChart';
import NullAreaChart from '../../component/chart/NullAreaChart';
import BasicColumnChart from '../../component/chart/BasicColumnChart';
import GroupChart from '../../component/chart/GroupChart';
import NegativeBarChart from '../../component/chart/NegativeBarChart';
import LineColumnChart from '../../component/chart/LineColumnChart';
import LineColumnAreaChart from '../../component/chart/LineColumnAreaChart';
import BasicRadarChart from '../../component/chart/BasicRadarChart';
import RadialBar from '../../component/chart/RadialBar';
import Piechart from '../../component/chart/Piechart';
import DonutChart from '../../component/chart/DonutChart';
import ScatterChar from '../../component/chart/ScatterChar';


export default function Charts() {




    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className='home' style={{ width: '89%' }}>
            {loading ? (
                <Loader />
            ) : (
                <div className='homeContainer'>
                    <Navbar />


                    <div className="flex w-1140">
                        <BasicLineChart />
                        <LineWithDataLable />
                    </div>
                    <div className="flex w-1140">
                        <Dashed />
                        <SteplineChart />
                    </div>
           

                    <Footer />
                </div>
            )}
        </div>
    );
}
