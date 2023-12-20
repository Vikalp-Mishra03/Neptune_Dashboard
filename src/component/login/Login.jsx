import React from 'react'
import '../../assets/style/Login.scss'
import { LiaUserSolid, LiaLockSolid, LiaFacebookF, LiaTwitter, LiaGooglePlus, LiaClock, LiaHandHoldingUsdSolid, LiaGrinAlt } from "react-icons/lia";
import { Carousel } from 'react-responsive-carousel';
export default function Login() {
    return (
        <div className="cont">
            <div className="login-one">
                <div className='login-one-container'>
                    <div className='padding'>
                        <div className='main-login-one'>
                            <div className='col1'>
                                <div className='half-slider'>
                                    <div className='slide-content'>
                                        <div className='top-sign-up'>
                                            <div className='about-comp'>NeptuneWeb</div>
                                            <div className='for-sign-up'>
                                                <p >Don't have an account ?</p>
                                                <a href="auth_signup_1.html">Sign Up</a>
                                            </div>
                                        </div>

                                        <div className='col0'>
                                            <div className='login-one-start'>
                                                <h6 >Log In</h6>
                                                <p >Please Log into your account</p>
                                                <div className='input-one-inputs mt-4'>
                                                    <input className='input' type="text" placeholder="Username" />
                                                    <LiaUserSolid />
                                                </div>
                                                <div className='input-one-inputs'>
                                                    <input className='input' type="password" placeholder="Password" />
                                                    <LiaLockSolid />
                                                </div>
                                                <div className='input-one-inputs'>
                                                    <label className='cbx ' for="cbx">
                                                        <input id="cbx" type="checkbox" />
                                                        <span>Remember me ?</span>
                                                    </label>
                                                </div>
                                                <div className='input-one-inputs'>
                                                    <button className='ripple-button' type="button">
                                                        <div className='js-ripple'>
                                                            <span className='ripple-circle'></span>
                                                        </div>
                                                        LOG IN
                                                    </button>
                                                </div>
                                                <div className='input-one-inputs forgot'>
                                                    <a href="#" >Forgot your Password ?</a>
                                                </div>


                                                <div className='login-one-input'>
                                                    <div className='social-btn'><a href="#" className='fb-btn'>
                                                        <LiaFacebookF />
                                                    </a>
                                                    </div>
                                                    <div className='social-btn'>
                                                        <a href="#" className="twitter-btn">
                                                            <LiaTwitter />
                                                        </a>
                                                    </div>
                                                    <div className='social-btn'>
                                                        <a href="#" className='google-btn'>
                                                            <LiaGooglePlus />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className='carousel'>
                                            <div >
                                                <div >
                                                    <Carousel autoPlay
                                                        infiniteLoop
                                                        interval={2000}
                                                        showStatus={false}
                                                        showThumbs={false}
                                                        showArrows={true}
                                                    >
                                                        <div className='white'>
                                                            <LiaClock />
                                                            <h2 >Save your time</h2>
                                                            <p >Everyone has been made for some particular work, and the <br /> desire for that work has been put in every heart</p>
                                                        </div>
                                                        <div className='white'>
                                                            <LiaHandHoldingUsdSolid />
                                                            <h2 >Save your money</h2>
                                                            <p >Everyone has been made for some particular work, and the <br /> desire for that work has been put in every heart</p>
                                                        </div>
                                                        <div className='white' >
                                                            <LiaGrinAlt />
                                                            <h2>Start your journey</h2>
                                                            <p >Everyone has been made for some particular work, and the <br /> desire for that work has been put in every heart</p>
                                                        </div>
                                                    </Carousel>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
