import React, { useState, useEffect } from 'react';
// import Sidebar from '../../component/sidebar/Sidebar';
import './home.scss';
import Navbar from '../../component/navbar/Navbar';
import Card from '../../component/workshop/card1/Card';
import Card2 from '../../component/workshop/card2/Card2';
import Card3 from '../../component/workshop/card3/Card3';
import Box1 from '../../component/sales/box1/Box1';
import Box2 from '../../component/sales/box2/Box2';
import Box3 from '../../component/sales/box3/Box3';
import Box4 from '../../component/sales/box4/Box4';
import Loader from '../../component/loader/Loader';
import Line from '../../component/charts/line/Line';
import Bars from '../../component/charts/bar/Bars';
import Seller from '../../component/Sellers/Seller';
import Queries from '../../component/queries/Queries';
import Issues from '../../component/issues/Issues';
import Award from '../../component/award/Award';
import TargetSales from '../../component/targetsales/TargetSales';
import Growth from '../../component/growth/Growth';
import Rate from '../../component/userrate/Rate';
import { PieComponent } from '../../component/pie chart/Pie';
import SalesSummary from '../../component/sales summary/SalesSummary';
import Reference from '../../component/reference/Reference';
import Sold from '../../component/sold/Sold';
import Media from '../../component/media/Media';
import Social from '../../component/social media/Social';
import Active from '../../component/active/Active';
import Campaigns from '../../component/campaigns/Campaigns';
import Ongoing from '../../component/ongoingProject/Ongoing';
import ToDoList from '../../component/todolist/ToDoList';
import Expense from '../../component/expenseSummary/Expense';
import Project from '../../component/project/Project';
import PayoutHistory from '../../component/payoutHistory/PayoutHistory';
import SellerTarget from '../../seller target/SellerTarget';
import TopSellingProduct from '../../component/topSellingProduct/TopSellingProduct';
import Footer from '../../component/footer/Footer';

export default function Home() {
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

                    <div className="container">
                        <Card />
                        <Card2 />
                        <Card3 />
                    </div>

                    <div className="sales">
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

                    <div className="universal-rate flex">
                        <Rate />
                        <PieComponent />
                    </div>

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
                    <Expense />
                    <Project />

                    <div className="flex">
                        <PayoutHistory />
                        <SellerTarget />
                    </div>

                    <TopSellingProduct />
                    <Footer />
                </div>
           )}
        </div>
    );
}
