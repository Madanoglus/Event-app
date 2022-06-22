/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import '../../App.css'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export default class EventsDetails extends Component {
  render() {
    return (
      <div>
        {this.props.events.map((event) => (
          <div className="eventdetail">
            <div className="eventdetail-slider">
              <Swiper
                // install Swiper modules
                className="swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <img src={event.imgUrl} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={event.imgUr2} />
                </SwiperSlide>
                <SwiperSlide>
                  <img src={event.imgUr3} />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="eventdetail-comment">
              <div>
                <div className="eventdetail-comment-name">{event.Name}</div>
                <div className="eventdetail-comment-comment">{event.Comment}</div>
                <div className="eventdetail-comment-city">{event.City}</div>
                <div className="eventdetail-comment-address">{event.Address}</div>
                <div className="eventdetail-comment-date">Etkinlik Günü: {event.DateDay} --- Etkinlik Saati: {event.DateHour}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
