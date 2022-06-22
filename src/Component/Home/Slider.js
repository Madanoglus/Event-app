/* eslint-disable jsx-a11y/alt-text */
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import '../../App.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
// Import Img
import img1 from '../../Img/img-slider/img1.jpg'
import img2 from '../../Img/img-slider/img2.jpg'
import img3 from '../../Img/img-slider/img3.jpg'
import img4 from '../../Img/img-slider/img4.jpg'
import img5 from '../../Img/img-slider/img5.jpg'
import img6 from '../../Img/img-slider/img6.jpg'

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      className="swiper"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      
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
        <img src={img6} />
      </SwiperSlide>
    </Swiper>
  )
}
