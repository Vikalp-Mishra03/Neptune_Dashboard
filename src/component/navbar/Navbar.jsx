import React, { useState } from 'react'
import { IoIosSearch } from 'react-icons/io'
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsSliders2 } from "react-icons/bs";
import { CiBellOn } from 'react-icons/ci'
import { LiaGrinBeam, LiaSignOutAltSolid, LiaUserPlusSolid } from "react-icons/lia";
import { AiOutlineCompress } from "react-icons/ai";
import { RxEnvelopeClosed } from "react-icons/rx";
import { HiLanguage } from "react-icons/hi2";
import { IoBriefcaseOutline, IoCloudDownloadOutline, IoLockClosedOutline, IoSettingsOutline } from "react-icons/io5"
import { BsBox2 } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa"
import './navbar.scss'
// import Slider from '../slider/Slider';
export default function Navbar() {

  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  const [showLang, setShowLang] = useState(false);

  const toggleLanguage = () => {
    setShowLang(!showLang);
  };

  const [showMess, setShowMess] = useState(false);

  const toggleMessage = () => {
    setShowMess(!showMess);
  };
  const [showNoti, setShowNoti] = useState(false);
  const toggleNotification = () => {
    setShowNoti(!showNoti);
  };

  const [showProfile, setShowProfile] = useState(false);
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const [showSlider, setShowSlider] = useState(false);
  const toggleSlider = () => {
    setShowSlider(!showSlider);
  };

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="small-wrapper">
          <div className="search">
            <IoIosSearch />
            <input type="text" placeholder='Search here' />
          </div>
          <button className="mega-menu" onClick={toggleContent}>
            Mega Menu
            <RiArrowDropDownLine />
          </button>

          {showContent && (
            <div className="mega-box">
              <div className="mini-mega-box">
                <div className="mini-box1">
                  <div className="application">
                    <h1>Applications</h1>
                    <li><a href="#">Ecommerce</a></li>
                    <li><a href="#">chat</a></li>
                    <li><a href="#">Email</a></li>
                    <li><a href="#">File Manager</a></li>
                    <li><a href="#">Calender</a></li>
                    <li><a href="#">Notes</a></li>
                  </div>
                  <div className="extra-page">
                    <h1>Extra Pages</h1>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Helpdesk</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Search Result</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </div>
                </div>
                <div className="mini-box2">
                  <div className="cube-box">
                    <div className="box">
                      <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-1.jpg" alt="" />
                      <p>Cube</p>
                    </div>
                    <div className="box">
                      <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-2.jpg" alt="" />
                      <p>HTech</p>
                    </div>
                    <div className="box">
                      <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-3.jpg" alt="" />
                      <p>Inovation</p>
                    </div>
                  </div>
                  <div className="cube-box">
                    <div className="box">
                      <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-4.jpg" alt="" />
                      <p>Circle</p>
                    </div>
                    <div className="box">
                      <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-5.jpg" alt="" />
                      <p>Techno</p>
                    </div>
                    <div className="box">
                      <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-6.jpg" alt="" />
                      <p>T Logy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          )}
        </div>

        <div className="another-wrapper">
          <li>
            <div className="compress div">
              <AiOutlineCompress />
            </div>
          </li>
          <li>
            <div className="language div" onClick={toggleLanguage}>
              <HiLanguage />
              {showLang && (
                <div className="lang-box">
                  <li><img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/flag/usa-flag.png" alt="" />English</li>
                  <li><img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/flag/spain-flag.png" alt="" />divish</li>
                  <li><img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/flag/france-flag.png" alt="" />French</li>
                  <li><img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/flag/saudi-arabia-flag.png" alt="" />Arabic</li>
                </div>
              )}
            </div>
          </li>
          <li>
            <div className="messages div" onClick={toggleMessage}>
              <RxEnvelopeClosed />
              {showMess && (
                <div className="messages-box">
                  <div className="email">
                    <h4>3 new mails</h4>
                    <a href="#">Mark all read</a>
                  </div>
                  <hr />

                  <div className="person-messages">
                    <div className="person">
                      <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-11.jpg" alt="" />
                      <div className="name">
                        <h5>Jennifer Queen</h5>
                        <p>Permission Required</p>
                      </div>
                    </div>
                    <div className="person person2">
                      <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-10.jpg" alt="" />
                      <div className="name">
                        <h5>Lara Smith</h5>
                        <p>Invoice needed</p>
                      </div>
                    </div>
                    <div className="person person2">
                      <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-9.jpg" alt="" />
                      <div className="name">
                        <h5>Victoria Williamson</h5>
                        <p>Account need to be synced</p>
                      </div>
                    </div>
                    <hr />

                    <div className="view-all">
                      <a href="#">View All</a>
                    </div>
                  </div>


                </div>
              )}
            </div>
          </li>
          <li>
            <div className="notification div" onClick={toggleNotification}>
              <CiBellOn />
              {showNoti && (
                <div className="notification-box">
                  <div className="notifications">
                    <h4>5 Notifications</h4>
                    <a href="#">Clear all</a>
                  </div>
                  <hr />

                  <div className="person-notification">
                    <div className="notify">
                      <BsBox2 />
                      <div className="name">
                        <h5>2 New orders placed</h5>
                        <p>10 sec ago</p>
                      </div>
                    </div>
                    <div className="notify">
                      <LiaUserPlusSolid />
                      <div className="name">
                        <h5>New user registered</h5>
                        <p>5 minute ago</p>
                      </div>
                    </div>
                    <div className="notify">
                      <LiaGrinBeam />
                      <div className="name">
                        <h5>21 Queries solved </h5>
                        <p>1 hour ago</p>
                      </div>
                    </div>
                    <div className="notify">
                      <IoCloudDownloadOutline />
                      <div className="name">
                        <h5>New update soon</h5>
                        <p>1 day ago</p>
                      </div>
                    </div>
                    <hr />

                    <div className="view-all">
                      <a href="#">View All</a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </li>
          <li className='profile' onClick={toggleProfile}>
            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-16.jpg" alt="" />

            {showProfile && (
              <div className="profile-box">
                <div className="profile">
                  <h4>Welcome Admin !</h4>
                </div>
                <hr />

                <div className="admin-profile">
                  <div className="notify">
                    <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/profile-16.jpg" alt="" />
                    <div className="name">
                      <h5>Sara</h5>
                      <p>Britannia</p>
                    </div>
                  </div>
                  <div className="notify">
                    <FaRegUserCircle />
                    <div className="name">
                      <h5>My Account</h5>
                    </div>
                  </div>
                  <div className="notify">
                    <IoBriefcaseOutline />
                    <div className="name">
                      <h5>My Activity</h5>
                    </div>
                  </div>
                  <div className="notify">
                    <IoSettingsOutline />
                    <div className="name">
                      <h5>Settings</h5>
                    </div>
                  </div>
                  <div className="notify">
                    <IoLockClosedOutline />
                    <div className="name">
                      <h5>Lock Screen</h5>
                    </div>
                  </div>
                  <hr />

                  <div className="notify">
                    <LiaSignOutAltSolid />
                    <div className="name">
                      <h5>Logout</h5>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </li>

          <li className='sliders' onClick={toggleSlider} ><BsSliders2 />
            {/* {showSlider && (
              <Slider  />
            )} */}
          </li>
        </div>
      </div>
      <hr />
    </div >
  )
}
