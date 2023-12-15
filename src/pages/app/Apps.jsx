import React, { useEffect, useState } from 'react';
import '../home/home.scss';
import Loader from '../../component/loader/Loader';
import Navbar from '../../component/navbar/Navbar';

import Footer from '../../component/footer/Footer';
import Event from '../../component/calendar/Event';
import MyCalendar from '../../component/calendar/MyCalendar';


export default function Apps() {




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
            <Event />
            <MyCalendar />
          </div>




          <Footer />
        </div>
      )}
    </div>
  );
}
