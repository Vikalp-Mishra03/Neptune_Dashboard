import React, { useEffect, useState } from 'react';
import '../home/home.scss';
import Loader from '../../component/loader/Loader';
import Footer from '../../component/footer/Footer';
import Navbar from '../../component/navbar/Navbar';
import Box1 from '../../component/sales/box1/Box1';
import Box2 from '../../component/sales/box2/Box2';
import Box3 from '../../component/sales/box3/Box3';
import Box4 from '../../component/sales/box4/Box4';
import Line from '../../component/charts/line/Line';
import Bars from '../../component/charts/bar/Bars';
import Seller from '../../component/Sellers/Seller';
import Queries from '../../component/queries/Queries';
import Issues from '../../component/issues/Issues';
import Award from '../../component/award/Award';
import TargetSales from '../../component/targetsales/TargetSales';
import Growth from '../../component/growth/Growth';
import UserConversionRate from '../../component/userConversionRate/UserConversionRate';
import SalesSummary from '../../component/sales summary/SalesSummary';
import Reference from '../../component/reference/Reference';
import Sold from '../../component/sold/Sold';
import Media from '../../component/media/Media';
import Social from '../../component/social media/Social';
import Active from '../../component/active/Active';
import Campaigns from '../../component/campaigns/Campaigns';
import Ongoing from '../../component/ongoingProject/Ongoing';
import ToDoList from '../../component/todolist/ToDoList';
import AdminDashboard from '../../component/adminDashboard/AdminDashboard';
import Orders from '../../component/orders/Orders';
import PendingTask from '../../component/pending task/PendingTask';
import { LiaAdobe, LiaAngleDownSolid, LiaAngleUpSolid, LiaCertificateSolid, LiaChartBar, LiaCoinsSolid, LiaFileInvoiceDollarSolid, LiaGlobeAmericasSolid, LiaGooglePlay, LiaHandHoldingUsdSolid, LiaHandshakeSolid, LiaInfoCircleSolid, LiaShoppingBasketSolid, LiaThumbsDownSolid, LiaUserShieldSolid } from 'react-icons/lia';
import { CiShoppingCart, CiUser } from 'react-icons/ci';
import Weather from '../../component/weather/Weather';
import TopPerformance from '../../component/topPerformance/TopPerformance';
import TopSellingProduct from '../../component/topPerformance/TopSellingProduct';
import ProductCard from '../../component/productCard/ProductCard';
import RecentItems from '../../component/productCard/RecentItems';
import InquiryForm from '../../component/productCard/InquiryForm';
import OverView from '../../component/overview/OverView';
import Dashboard3 from '../../component/dashboard3card/Dashboard3';
import ProductImg from '../../component/productCard/ProductImg';
import AppleLaptop from '../../component/assets/apple-desktop.png'
import ApplePhone from '../../component/assets/apple-phone.png'
import AppleWatch from '../../component/assets/apple-watch.png'
import RevenueComparison from '../../component/revenue/RevenueComparison';
import TotalvsActual from '../../component/revenue/TotalvsActual';
import Earning from '../../component/earning/Earning';
import ProductCarousel from '../../component/earning/ProductCarousel';
import DesignerProfile from '../../component/earning/DesignerProfile';
import Balance from '../../component/balance/Balance';
import Target from '../../component/home4/Target';
import { FaGlobeAfrica } from 'react-icons/fa';
import VisitandSales from '../../component/home4/VisitandSales';
import Statistics from '../../component/home4/Statistics';
import Sales from '../../component/home4/Sales';
import Facebook from '../../component/home4/Facebook';
import Service from '../../component/home4/Service';
import AddNewProject from '../../component/home4/AddNewProject';
import OngoingTask from '../../component/home4/OngoingTask';
import AmountDetailt from '../../component/home4/AmountDetailt';
import DaySchedule from '../../component/home4/DaySchedule';
import SmallInfo from '../../component/home5/SmallInfo';
import TrendingProduct from '../../component/home5/TrendingProduct';
import Softwarestore from '../../component/home5/Softwarestore';
import Notification from '../../component/home5/Notification';
import Appointment from '../../component/home5/Appointment';
import Alert from '../../component/home5/Alert';
import TotalCustomerIssues from '../../component/home5/TotalCustomerIssues';
import Activity from '../../component/home5/Activity';
import ProjectSeries from '../../component/home5/ProjectSeries';

export default function Widgets() {

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

          <div className="sales mt-70">
            <Box1 />
            <Box2 />
            <Box3 />
            <Box4 />
          </div>

          <div className="line">
            <Line />
          </div>

          <div className="bar">
            <Bars />
            <Seller />
          </div>

          <div className="queries">
            <Queries />
            <Issues />
            <Award />
          </div>

          <div className="targetSales flex">
            <TargetSales />
            <Growth />
          </div>

          <UserConversionRate />

          <div className="summary flex">
            <SalesSummary />
            <Reference />
            <Sold />
          </div>

          <div className="flex">
            <Media />
            <Social />
          </div>

          <div className="flex">
            <Active />
            <Campaigns />
          </div>

          <div className="flex">
            <Ongoing />
            <ToDoList />
          </div>

          <div className="mt70">
            <AdminDashboard />
          </div>
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


          <div className="flex mt70">
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

          <div className="w150">
            <Balance />
          </div>

          <div className="flex" style={{ marginTop: '50px' }}>
            {productImage.map((cardData, index) => (
              <ProductImg key={index} {...cardData} />
            ))}
          </div>

          <div className="flex mt70">
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
