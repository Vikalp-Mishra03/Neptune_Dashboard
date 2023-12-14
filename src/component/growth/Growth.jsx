import React, { useState } from 'react'
import './growth.scss'
import { RiArrowDropDownLine } from "react-icons/ri";
export default function Growth() {

    const [showGrowth, setShowGrowth] = useState(false);

    const toggleGrowth = () => {
        setShowGrowth(!showGrowth);
    };

    return (
        <div className='growth'>
            <div className="inner">
                <div className="heading">
                    <div className="dropdown" onClick={toggleGrowth}>
                        <span>2020 <RiArrowDropDownLine /></span>

                        {showGrowth && (
                            <div className="box">
                                <div className="inner">
                                    <div className=" drop-menu">
                                        <a href="#">2019</a>
                                        <a href="#">2018</a>
                                        <a href="#">2017</a>
                                        <a href="#">2016</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="content">
                <div id="chart1">
</div>

                </div>
            </div>
        </div>
    )
}