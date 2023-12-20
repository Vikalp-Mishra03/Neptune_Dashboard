import React, { useEffect, useState } from 'react';
import '../home/home.scss';
import Loader from '../../component/loader/Loader';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import VerticalBarChart from '../../component/chartjs/VerticalBarChart';
import Search from '../../component/contact/Search';


export default function Contact() {
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

                    <Search />

                    <Footer />
                </div>
            )}
        </div>
    );
}
