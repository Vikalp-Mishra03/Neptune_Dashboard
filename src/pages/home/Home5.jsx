import React, { useEffect, useState } from 'react';
import './home.scss';
import Loader from '../../component/loader/Loader';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import SmallInfo from '../../component/home5/SmallInfo';
import { LiaChartBar, LiaGlobeAmericasSolid, LiaShoppingBasketSolid, LiaGooglePlay, LiaAdobe } from "react-icons/lia";
import TrendingProduct from '../../component/home5/TrendingProduct';
import Softwarestore from '../../component/home5/Softwarestore';
import Notification from '../../component/home5/Notification';
import Appointment from '../../component/home5/Appointment';
import Alert from '../../component/home5/Alert';
import TotalCustomerIssues from '../../component/home5/TotalCustomerIssues';
import Activity from '../../component/home5/Activity';
import ProjectSeries from '../../component/home5/ProjectSeries';

export default function Home5() {

    const small = [
        {
            icons: <LiaChartBar />,
            title: 'Sales Stats',
            para: "70% Up for '20",
            style: {
                backgroundColor: ' #ffeccb', color: '#e2a03f '
            },
            color: {
                color: '#e2a03f'
            }
        },
        {
            icons: <LiaShoppingBasketSolid />,
            title: 'My Cart',
            para: "Value $89,000",
            style: {
                backgroundColor: ' #fff', color: '#5526ab '
            },
            color: {
                color: '#5526ab'
            }
        },
        {
            icons: <LiaGlobeAmericasSolid />,
            title: 'Global',
            para: "2.5M Users",
            style: {
                backgroundColor: '#bae7ff', color: '#2196f3'
            },
            color: {
                color: '#2196f3'
            }
        },
    ];
    const store = [
        {
            icons: <LiaGooglePlay />,
            title: 'Play Store',
            para: "Offering discounts for online store and earn loyalty Points",
            button: 'Join Now',
            bcColor: {
                backgroundColor: '#2262c6'
            },

            color: {
                color: '#2262c6'
            }
        },
        {
            icons: <LiaAdobe />,
            title: 'Adobe',
            para: "Offering discounts for online store and earn loyalty Points",
            button: 'Pay Now',

            color: {
                color: '#e7515a'
            },
            bcColor: { backgroundColor: '#e7515a' }
        },

    ];


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

                    <div className="flex mt-70">
                        <div className="flex-direction w-16">
                            {/* <SmallInfo /> */}
                            {small.map((cardData, index) => (
                                <SmallInfo key={index} {...cardData} />
                            ))}
                        </div>
                        <TrendingProduct />

                        <div className="flex-direction w-25">
                            {store.map((cardData, index) => (
                                <Softwarestore key={index} {...cardData} />
                            ))}
                        </div>
                    </div>
                    <div className="flex">
                        <Notification />
                        <div className="flex-direction w-50 ">
                            <Appointment />
                            <Alert />
                        </div>
                    </div>

                    <div className="flex">
                        <TotalCustomerIssues />
                        <Activity />
                        <ProjectSeries />
                    </div>

                    <Footer />
                </div>
            )}
        </div>
    );
}
