import React from 'react'
import { LiaFacebook, LiaAngleRightSolid } from "react-icons/lia";
import { FaFacebookF, FaTwitter, FaInstagram,FaLinkedin } from "react-icons/fa";
export default function Facebook() {
    return (
        <div className='boxOne w-33'>
            <div className="inner center" style={{ flexDirection: 'column' }}>
                <div className="background-round  light-voilet voilet">
                    <LiaFacebook />
                    <div className="center"></div>
                </div>

                <h6 className='mt-1'>Facebook -  <span className="sub-heading mb-0">125 traffic</span> </h6>

                <p className='primary-text align light-gray'>The generated facebook therefore always free from posts, big images, or words etc.</p>

                <a href="#" className='primary-text voilet center mb-1'>Learn more <LiaAngleRightSolid /></a>

                <div className="justify-around">
                    <div className="social-media flex-direction">
                        <FaFacebookF className='font-25 voilet' />
                        <p className='primary-text align light-gray'>77.2K</p>
                    </div>
                    <div className="social-media flex-direction">
                        <FaTwitter className='font-25 sky-blue' />
                        <p className='primary-text align light-gray'>44.2K</p>
                    </div>
                    <div className="social-media flex-direction">
                        <FaInstagram className='font-25 red' />
                        <p className='primary-text align light-gray'>77.2K</p>
                    </div>
                </div>
                <div className="mt-1 mb-1 social-media flex-direction">
                    <FaLinkedin className='font-25 sky-blue' />
                    <p className='primary-text align light-gray'>10.2K</p>
                </div>
            </div>
        </div>
    )
}
