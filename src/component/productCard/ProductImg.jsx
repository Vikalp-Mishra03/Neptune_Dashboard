import React from 'react'

export default function ProductImg(props) {

    const { ProductImg, title, about, style, paragraph } = props

    return (
        <div className='boxOne'>
            <div className="inner" style={style}>
                <div className="align" style={{ marginTop: '-60px' }}>
                    <img src={ProductImg} alt="" height={150} />
                </div>
                <div style={{ paddingTop: '1.25rem',paddingRight: '1.25rem',paddingLeft: '1.25rem' }}>
                    <h4 >{title}</h4>
                    <p style={{fontSize: '0.875rem'}}>{about}</p>
                </div>
            </div>
        </div >
    )
}
