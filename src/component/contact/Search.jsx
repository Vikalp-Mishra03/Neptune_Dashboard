import React from 'react'
import { LiaSearchSolid } from "react-icons/lia";
import './search.scss'

export default function Search() {
    return (
        <div className='boxOne mt-70 w-100 search'>
            <div className="inner">
                <div className="input">
                    <LiaSearchSolid />
                    <input type="text" placeholder='Search Contacts'/>
                </div>

                <div className="right-side">
                    
                </div>
            </div>
        </div>
    )
}
