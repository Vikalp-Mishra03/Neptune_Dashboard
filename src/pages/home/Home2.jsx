
import React, { useEffect, useState } from 'react';
import './home.scss';
import Loader from '../../component/loader/Loader';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import AdminDashboard from '../../component/adminDashboard/AdminDashboard';
import PendingTask from '../../component/pending task/PendingTask';
import Orders from '../../component/orders/Orders';
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import Weather from '../../component/weather/Weather';
import TopPerformance from '../../component/topPerformance/TopPerformance';
import TopSellingProduct from '../../component/topPerformance/TopSellingProduct';
import product1Image from '../../component/assets/product-1.jpg';
import product4Image from '../../component/assets/product-4.jpg';
import ProductCard from '../../component/productCard/ProductCard';
import InquiryForm from '../../component/productCard/InquiryForm';
import RecentItems from '../../component/productCard/RecentItems';
import OverView from '../../component/overview/OverView';

export default function Home2() {
  const [loading, setLoading] = useState(true);

  // Sample data for the Orders component
  const orderData = [
    {
      title: 'Orders',
      quantity: 1452,
      icon: <CiShoppingCart />,
      increaseIcon: <LiaAngleUpSolid className='green' style={{ paddingTop: '5px' }} />,
      badge: '+ 0.2%',
      subHeading: 'From last month',
    }
  ];

  // Add more data objects if needed
  const orderData1 = [
    {
      title: 'Profit',
      quantity: '$200',
      icon: <LiaHandHoldingUsdSolid />,
      increaseIcon: <LiaAngleDownSolid className='green' style={{ paddingTop: '5px' }} />,
      badge: '-5.4%',
      subHeading: 'From last month',
      color: '#e7515a',
    },
  ];
  const orderData2 = [
    {
      title: 'Customer',
      quantity: '9,887',
      icon: <CiUser />,
      increaseIcon: <LiaAngleUpSolid className='green' style={{ paddingTop: '5px' }} />,
      badge: '+25%',
      subHeading: 'From last month',
      color: '#e7515a',
    },
  ]

  const productData1 = [
    {
      productImage: product1Image,
      productName: 'Product One',
      productPrice: '$5,458',
      badgeText: '+ 25%',
      subHeadingText: 'From last month',
    },
    {
      productImage: product4Image,
      productName: 'Product Four',
      productPrice: '$7,899',
      badgeText: '- 10%',
      subHeadingText: 'From previous quarter',
    }
  ]

  const producCard1 = [
    {
      title: 'Sales details of product',
      quantity: '$74,989',
      icon: <LiaHandHoldingUsdSolid />,
      increaseIcon: <LiaAngleDownSolid className='green' style={{ paddingTop: '5px' }} />,
      badge: '-5.4%',
      subHeading: 'Total 175 Sales',
      color: '#009688',
    }
  ];
  const producCard2 = [
    {
      title: 'Pending payment of product',
      quantity: '$24,989',
      icon: <LiaHandHoldingUsdSolid />,
      increaseIcon: <LiaAngleDownSolid className='green' style={{ paddingTop: '5px' }} />,
      badge: '-5.4%',
      subHeading: 'Total 98 clients',
      color: '#e2a03f',
      backgroundColor: '#e2a03f',
    }
  ];


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

          <AdminDashboard />

          <div className='flex'>
            <PendingTask />
            <Orders orderData={orderData} />
            <Orders orderData={orderData1} />
            <Orders orderData={orderData2} />
          </div>
          <Weather />

          <div className="flex">
            <TopPerformance />
            <TopSellingProduct />
          </div>

          <div className="flex">
            <div className="flex">
              <div className="flex" style={{ flexDirection: 'column', alignItems: 'start', width: '66.3%' }}>
                <div className="flex" style={{ width: '100%' }}>
                  {producCard1.map((cardData, index) => (
                    <ProductCard key={index} {...cardData} />
                  ))}
                  {producCard2.map((cardData, index) => (
                    <ProductCard key={index} {...cardData} />
                  ))}
                </div>
                <RecentItems />
              </div>
              <InquiryForm />
            </div>
          </div>

          <OverView />
          <Footer />
        </div>
      )}
    </div>
  );
}
