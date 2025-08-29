import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import '../styles/sections/collection.scss'
import { collectionData } from '../util/collection'

const Collection = () => {
  return (
    <div className='inner collection-inner'>

      <div className="t-wrap">
        <h2 className='tit'>TOCOBO COLLECTION</h2>
        <p className='txt'>Shop By Category</p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ type: 'progressbar', }}
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
    </div>
  )
}

export default Collection