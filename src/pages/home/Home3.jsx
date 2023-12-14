import React, { useEffect, useState } from 'react';
import './home.scss';
import Loader from '../../component/loader/Loader';
import Navbar from '../../component/navbar/Navbar';
import Dashboard3 from '../../component/dashboard3card/Dashboard3'
import Footer from '../../component/footer/Footer';
import TopSellingProduct from '../../component/topSellingProduct/TopSellingProduct';
import { LiaInfoCircleSolid, LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";
import RevenueComparison from '../../component/revenue/RevenueComparison';
import TotalvsActual from '../../component/revenue/TotalvsActual';
import Earning from '../../component/earning/Earning';
import ProductCarousel from '../../component/earning/ProductCarousel';
import DesignerProfile from '../../component/earning/DesignerProfile';
import Balance from '../../component/balance/Balance';
import Registration from '../../component/balance/Registration';
import ProductImg from '../../component/productCard/ProductImg';
import AppleLaptop from '../../component/assets/apple-desktop.png'
import ApplePhone from '../../component/assets/apple-phone.png'
import AppleWatch from '../../component/assets/apple-watch.png'

export default function Home3() {

  const dashboardData = [
    {
      title: 'Profit Status',
      dollar: '$',
      price: 710,
      icons: <LiaInfoCircleSolid />,
      brief: 'Income: $22506',
      angleIcon: <LiaAngleUpSolid />,
      percantage: '10.25%',
    },
    {
      title: 'Total Sales',
      dollar: '$',
      price: 510,
      icons: <LiaInfoCircleSolid />,
      brief: 'This Month: $506',
      angleIcon: <LiaAngleDownSolid />,
      percantage: '5.00%',
    },
    {
      title: 'New Users',
      price: '223',
      k: 'K',
      icons: <LiaInfoCircleSolid />,
      brief: 'Total: 9.4M',
      angleIcon: <LiaAngleUpSolid />,
      percantage: '15.30%',
    },
    {
      title: 'Orders',
      price: 302,
      icons: <LiaInfoCircleSolid />,
      brief: 'Total: 3.2K',
      angleIcon: <LiaAngleUpSolid />,
      percantage: '2.30%',
    },
  ];


  const productImage = [
    {
      ProductImg: AppleLaptop,
      title: 'Newest Arrival',
      about: 'Amazing product with max performance and fast processor',
      style: { backgroundColor: '#ffeccb', color: '#e2a03f' }
    },
    {
      ProductImg: ApplePhone,
      title: 'Most Popular',
      about: 'Best phone in the market. Most popular among youth',
      style: { backgroundColor: '#bae7ff', color: ' #5526ab' }
    },
    {
      ProductImg: AppleWatch,
      title: 'Hot Trending',
      about: 'Latest technology with heart rate sensor and speedometer.',
      style: { backgroundColor: '#ffe1e2', color: '#e7515a' }
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
            {dashboardData.map((cardData, index) => (
              <Dashboard3 key={index} {...cardData} />
            ))}
          </div>

          <div className="flex">
            <RevenueComparison />
            <TotalvsActual />
          </div>

          <div className="flex">
            <Earning />
            <ProductCarousel />
            <DesignerProfile />
          </div>

          <div className="flex">
            <Balance />
            <Registration />
          </div>

          <div className="flex" style={{ marginTop: '50px' }}>
            {productImage.map((cardData, index) => (
              <ProductImg key={index} {...cardData} />
            ))}
          </div>

          <TopSellingProduct />
          <Footer />
        </div>
      )}
    </div>
  );
}
