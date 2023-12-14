import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import './productCard.scss'
import { LiaPlusSolid } from "react-icons/lia";
export default function ProductCarousel() {
    return (
        <div className='boxOne w-33  productCard'>
            <div className="inner p-0">
                <Carousel autoPlay
                    infiniteLoop
                    interval={1000}
                    showStatus={false}
                    showThumbs={false}
                    showArrows={true}
                >
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img3} />
                    </div>
                </Carousel>

                <div className=" plus-icon">
                    <LiaPlusSolid />
                </div>

                <div class="card-body">
                    <h4 class="card-title">Our Products</h4>
                    <p>This is a general sub title which can be used as product description or other description.</p>
                    <div className='align-center' >
                        <span class="badge">Sales</span>
                        <span class="badge">Design</span>
                        <span class="badge">Developer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
