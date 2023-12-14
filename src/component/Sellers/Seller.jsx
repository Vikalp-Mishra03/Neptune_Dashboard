import React from 'react'
import './seller.scss'
import { BiUpArrowAlt } from "react-icons/bi";

export default function Seller() {
    return (
        <div className='seller'>
            <div className="sellers">
                <h5>Weekly Top Sellers</h5>
                <div className="rows">
                    <div className="col1">
                        <div className="img">
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-1.jpg" alt="" />
                            <div className="name">
                                <h6>WS Retail</h6>
                                <div className="country">USA</div>
                            </div>
                        </div>
                        <div className="measure">
                            <div className="no">6644</div>
                            <BiUpArrowAlt />
                        </div>
                    </div>
                    <div className="col1">
                        <div className="img">
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-1.jpg" alt="" />
                            <div className="name">
                                <h6>WS Retail</h6>
                                <div className="country">USA</div>
                            </div>
                        </div>
                        <div className="measure">
                            <div className="no">6644</div>
                            <BiUpArrowAlt />
                        </div>
                    </div>
                    <div className="col1">
                        <div className="img">
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-1.jpg" alt="" />
                            <div className="name">
                                <h6>WS Retail</h6>
                                <div className="country">USA</div>
                            </div>
                        </div>
                        <div className="measure">
                            <div className="no">6644</div>
                            <BiUpArrowAlt />
                        </div>
                    </div>
                    <div className="col1">
                        <div className="img">
                            <img src="http://demo.neptuneapp.site/demo-11/ltr/assets/img/company-1.jpg" alt="" />
                            <div className="name">
                                <h6>WS Retail</h6>
                                <div className="country">USA</div>
                            </div>
                        </div>
                        <div className="measure">
                            <div className="no">6644</div>
                            <BiUpArrowAlt />
                        </div>
                    </div>
                    <div className="col2">
                        <a href="#">View All</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
