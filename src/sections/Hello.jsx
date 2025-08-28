import React from 'react'
import '../styles/sections/hello.scss'
import { helloData } from '../util/hello'

const Hello = () => {
    return (
        <div className='inner'>
            <div className="img-wrap">
                <img src="#" alt="" />
            </div>
            <div className="t-wrap">
                <p className="txt-2">{helloData.eyebrow}</p>
                <h2 className="tit">{helloData.title}</h2>
                <p className="txt-1">{helloData.description}</p>
                <a href="" className='btn'>{helloData.cta.label}</a>
            </div>
        </div>
    )
}

export default Hello