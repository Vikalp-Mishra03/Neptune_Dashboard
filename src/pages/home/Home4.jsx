import React, { useEffect, useState } from 'react';
import './home.scss';
import Loader from '../../component/loader/Loader';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import PayoutHistory from '../../component/payoutHistory/PayoutHistory';
import SellerTarget from '../../seller target/SellerTarget';
import Target from '../../component/home4/Target';
import { FaGlobeAfrica } from "react-icons/fa";
import VisitandSales from '../../component/home4/VisitandSales';
import Statistics from '../../component/home4/Statistics';
import Facebook from '../../component/home4/Facebook';
import Sold from '../../component/sold/Sold';
import Sales from '../../component/home4/Sales';
import Service from '../../component/home4/Service';
import { LiaCertificateSolid, LiaHandshakeSolid, LiaThumbsDownSolid, LiaFileInvoiceDollarSolid, LiaUserShieldSolid, LiaCoinsSolid, LiaHandHoldingUsdSolid } from "react-icons/lia";
import AddNewProject from '../../component/home4/AddNewProject';
import OngoingTask from '../../component/home4/OngoingTask';
import AmountDetailt from '../../component/home4/AmountDetailt';
import DaySchedule from '../../component/home4/DaySchedule';

export default function Home4() {

    const target = [
        {
            icons: <FaGlobeAfrica />,
            counting: '100M',
            subHeading: 'Total Global Reach',
            count: '150M',
            style: { width: '60%' },

            iconStyle: {
                height: '3.25rem', width: '3.25rem', color: '#2196f3', fontSize: '35px'
            }
        },
        {
            icons: <LiaCertificateSolid />,
            counting: '100',
            subHeading: 'Presigious Awards',
            count: '150M',
            style: { width: '90%', backgroundColor: ' #2262c6' },
            iconStyle: {
                backgroundColor: ' #dccff7',
                height: '3.25rem', width: '3.25rem', color: '#5c1ac3', fontSize: '35px'
            }
        },
    ];
    const target1 = [
        {
            icons: <LiaHandshakeSolid />,
            counting: '745',
            subHeading: 'New Clients',
            count: '1000',
            style: { width: '75%', backgroundColor: '#8dbf42' },
            iconStyle: {
                backgroundColor: '#e6ffbf',
                height: '3.25rem', width: '3.25rem', color: '#8dbf42', fontSize: '35px'
            }
        },
        {
            icons: <LiaThumbsDownSolid />,
            counting: '2200',
            subHeading: 'Negative Feedback',
            count: '100',
            style: { width: '15%', backgroundColor: ' #e7515a' },
            iconStyle: {
                backgroundColor: ' #ffe1e2',
                height: '3.25rem', width: '3.25rem', color: '#e7515a', fontSize: '35px'
            }
        },
    ];

    const service = [
        {
            icon: <LiaFileInvoiceDollarSolid />,
            service: 'Sales',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            time: '2:30pm',
            day: 'Tommorow'
        },
        {
            icon: <LiaThumbsDownSolid />,
            service: 'Support',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            time: '2:30pm',
            day: 'Tommorow'
        },
        {
            icon: <LiaUserShieldSolid />,
            service: 'Account',
            para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            time: '2:30pm',
            day: 'Tommorow'
        },
    ];


    const AmountReport = [
        {

            AmountDetail: 'Amount Due',
            amount: '5450.90',
            place: 'From WS Retail',
            paymentReport: 'Payment for next week',
            icon: <LiaCoinsSolid />,
            style: { backgroundColor: '#ffe1e2', color: '#e7515a' },
            textColor: { color: '#e7515a' }
        },

        {

            AmountDetail: 'Amount Recieved',
            amount: '2450.90',
            place: 'Milestone Completed',
            paymentReport: 'All payment recieved',
            icon: <LiaHandHoldingUsdSolid />,
            style: { backgroundColor: '#e6ffbf', color: '#8dbf42' },
            textColor: { color: '#8dbf42' }
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

                    <div className="flex">
                        {target.map((cardData, index) => (
                            <Target key={index} {...cardData} />
                        ))}
                    </div>
                    <div className="flex" style={{ marginTop: '-55px' }}>
                        {target1.map((cardData, index) => (
                            <Target key={index} {...cardData} />
                        ))}
                    </div>

                    <div className="flex">
                        <VisitandSales />
                        <Statistics />
                    </div>

                    <div className="flex">
                        <Facebook />
                        <Sold />
                        <Sales />
                    </div>

                    <div className="flex">
                        {service.map((cardData, index) => (
                            <Service key={index} {...cardData} />
                        ))}
                        <AddNewProject />
                    </div>

                    <div className="flex">
                        <OngoingTask />
                        <div className='w-33'>
                            {AmountReport.map((cardData, index) => (
                                <AmountDetailt key={index} {...cardData} />
                            ))}
                        </div>
                        <DaySchedule />
                    </div>

                    <div className="flex">
                        <PayoutHistory />
                        <SellerTarget />
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    );
}
