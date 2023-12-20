import React, { useState, useEffect } from 'react';
import '../home/home.scss';
import Navbar from '../../component/navbar/Navbar';
import Loader from '../../component/loader/Loader';
import Footer from '../../component/footer/Footer';

export default function BootstrapCard () {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className="home">
            {loading ? (
                <Loader />
            ) : (
                <div className="homeContainer">
                    <Navbar />



                    <Footer />
                </div>
            )}
        </div>
    );
}
