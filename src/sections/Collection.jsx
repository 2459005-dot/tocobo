import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/sections/collection.scss'
import { collectionData } from '../util/collection'

const Collection = () => {

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current
      swiperRef.current.params.navigation.nextEl = nextRef.current
      swiperRef.current.navigation.destroy()
      swiperRef.current.navigation.init()
      swiperRef.current.navigation.update()
    }
  }, [])

  return (
    <div className='inner collection-inner'>

      <div className="t-wrap">
        <h2 className='tit'>TOCOBO <br /> COLLECTION</h2>
        <p className='txt'>Shop By Category</p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{ type: 'progressbar', }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Pagination, Navigation]}
        className="mySwiper">

        {collectionData.map((cd) => (
          <SwiperSlide>
            <div className="info-wrap">
              <ul>
                <li key={cd.id}>
                  <div className="info-tit">{cd.title}</div>
                  <div className="name">{cd.name}</div>
                  <div className="k-name">{cd.kname}</div>
                  <a href="#">
                    <div className="img-wrap">
                      <img src={cd.image} alt="" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      <a href="#" className='prev' ref={prevRef}></a>
      <a href="#" className='next' ref={nextRef}></a>
    </div>
  )
}

export default Collection