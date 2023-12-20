import React, { useEffect, useState } from 'react';
import '../home/home.scss';
import Loader from '../../component/loader/Loader';
import Navbar from '../../component/navbar/Navbar';

import Footer from '../../component/footer/Footer';
// import AdvancedSmilAnimations from '../../component/chartList/AdvancedSmilAnimations';



export default function ChartList() {




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
                        < AdvancedSmilAnimations />
                        {/* <LineWithDataLabl /> */}
                    </div>

                    <Footer />
                </div>
            )}
        </div>
    );
}
