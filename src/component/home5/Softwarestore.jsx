import React from 'react'

export default function Softwarestore(props) {
    const { title, para, button, icons, bcColor, color } = props
    return (
        <div className='boxOne'>
            <div className="inner white" style={bcColor}>
                <div className="justify-between">
                    <div className="div">
                        <h5 className='white' style={{ paddingTop: '3rem' }}>{title}</h5>
                        <div className="paragraph white" style={{  marginTop: '1.5rem', marginBottom: '1.5rem' }}>{para}</div>
                        <div className="btn1 align" style={color} >{button}</div>
                    </div>
                    <div className="icons font-size " style={{ fontSize: '110px',opacity: '.5', marginTop: '-130px' }}>{icons}</div>
                </div>
            </div>
        </div>
    )
}
