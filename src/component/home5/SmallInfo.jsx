import React from 'react'

export default function SmallInfo(props) {
    const { icons, title, para, style, color } = props
    return (
        <div className='boxOne ' style={{width:'225px'}}>
            <div className="inner" style={style}>
                <div className="icon font-45">{icons}</div>
                <h5 style={color}>{title}</h5>
                <p className='dark-gray'>{para}</p>
            </div>
        </div>
    )
}
