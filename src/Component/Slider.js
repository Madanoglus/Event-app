/* eslint-disable jsx-a11y/alt-text */
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import '../App.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// Import Img
import img1 from '../Img/Imgs/img1.jpg'
import img2 from '../Img/Imgs/img2.jpg'
import img3 from '../Img/Imgs/img3.jpg'
import img4 from '../Img/Imgs/img4.jpg'
import img5 from '../Img/Imgs/img5.jpg'

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={img1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} />
      </SwiperSlide>
    </Swiper>
  )
}
