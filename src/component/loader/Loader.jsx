import React from 'react'
import './loader.scss'

export default function Loader() {
    return (
        <div>
            <div id="load_screen">
                <div class="boxes">
                    <div class="box">
                        <div></div><div></div><div></div><div></div>
                    </div>
                    <div class="box">
                        <div></div><div></div><div></div><div></div>
                    </div>
                    <div class="box">
                        <div></div><div></div><div></div><div></div>
                    </div>
                    <div class="box">
                        <div></div><div></div><div></div><div></div>
                    </div>
                </div>
                <p class="neptune-loader-heading">Neptune</p>
            </div>
        </div>
    )
}
