import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'

const TopBtn = () => {

    const scrollTo = useSmoothScroll()

    return (
        <div className='fixed-top'>
            <button
                className='top-btn'
                onClick={(e) => {
                    e.preventDefault()
                    scrollTo('Hero')
                }}>
                <img src="public\img\icon_top.svg" alt="" />
            </button>
            <a href="#" className='talk-btn'>
                TCB
            </a>
            <p>1:1 Talk</p>
        </div>
    )
}

export default TopBtn