import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

import './social.scss'
export default function Social() {
    return (
        <div className='social'>

            <div class="widtget ">
                <AiOutlineFacebook />
                <div class="p-3 ">
                    <span class="strong ">Facebook</span>
                    <span class="d-block">28000</span>
                </div>
            </div>
            <div class="widtget">
                <AiOutlineInstagram className='svg1' />
                <div class="p-3">
                    <span class=" strong color1">Instagram</span>
                    <span class="d-block">20250</span>
                </div>
            </div>
            <div class="widtget bottom">
                <AiOutlineWhatsApp className='svg2' />
                <div class="p-3">
                    <span class=" strong color2">Whatsapp</span>
                    <span class="d-block">17589</span>
                </div>
            </div>
        </div>
    )
}
