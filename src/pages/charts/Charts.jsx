import React, { useEffect, useState } from 'react';
import '../home/home.scss';
import Loader from '../../component/loader/Loader';
import Navbar from '../../component/navbar/Navbar';

import Footer from '../../component/footer/Footer';
import Event from '../../component/calendar/Event';
import MyCalendar from '../../component/calendar/MyCalendar';
import BasicLineChart from '../../component/chart/BasicLineChart';
import LineWithDataLable from '../../component/chart/LineWithDataLable';
import Dashed from '../../component/chart/Dashed';
import SteplineChart from '../../component/chart/SteplineChart';
import BasicAreaChart from '../../component/chart/BasicAreaChart';
import SplineChart from '../../component/chart/SplineChart';
import NegativeAreaChart from '../../component/chart/NegativeAreaChart';
import NullAreaChart from '../../component/chart/NullAreaChart';


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
                    <div className="flex w-1140">
                        <BasicAreaChart />
                        <SplineChart />
                    </div>
                    <div className="flex w-1140">
                        <NegativeAreaChart />
                        <NullAreaChart />
                    </div>




                    <Footer />
                </div>
            )}
        </div>
    );
}
