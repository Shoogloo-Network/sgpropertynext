"use client"
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './UnderConstruction.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const UnderConstruction = () => {
  return (
    <div className="under-construction-main-div">
      <Swiper
      modules={[Navigation, Pagination,  A11y]}
    //   slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{height:"100%"}}
      breakpoints={{
        640: {
          slidesPerView: 1, // 1 slide on mobile (screen width ≤ 640px)
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2, // 2 slides on tablet (screen width > 640px and ≤ 768px)
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4, // 3 slides on desktop (screen width > 768px)
          spaceBetween: 10,
        },
      }}
    >
      <SwiperSlide className="nextprevwidth"></SwiperSlide>
      <SwiperSlide>
 <div className="property-card">
  <a href="/detail-page" target="_blank">
    <div className="image">
      <img
        src="https://housing-images.n7net.in/4f2250e8/1f3f35871f27e395ff9d78fa106c26fc/v0/medium/green_valley_affordable_livings-sewak_park-delhi-green_valley_builders.jpeg"
        alt="Green Valley Affordable livings"
      />
    </div>
    <div className="info">
      <div className="card-title">Green Valley Affordable livings</div>
      <div className="details">2, 3 BHK Apartments</div>
      <div className="location">Dwarka Mor, South West Delhi, New Delhi</div>
      <div className="price">₹23.5 L - ₹60.01 L</div>
      <button className="cta-button">Contact</button>
    </div>
  </a>
</div>
</SwiperSlide>
      <SwiperSlide><div className="property-card">
  <a href="/detail-page" target="_blank">
    <div className="image">
      <img
        src="https://housing-images.n7net.in/4f2250e8/1f3f35871f27e395ff9d78fa106c26fc/v0/medium/green_valley_affordable_livings-sewak_park-delhi-green_valley_builders.jpeg"
        alt="Green Valley Affordable livings"
      />
    </div>
    <div className="info">
      <div className="card-title">Green Valley Affordable livings</div>
      <div className="details">2, 3 BHK Apartments</div>
      <div className="location">Dwarka Mor, South West Delhi, New Delhi</div>
      <div className="price">₹23.5 L - ₹60.01 L</div>
      <button className="cta-button">Contact</button>
    </div>
  </a>
</div></SwiperSlide>
      <SwiperSlide><div className="property-card">
  <a href="/detail-page" target="_blank">
    <div className="image">
      <img
        src="https://housing-images.n7net.in/4f2250e8/1f3f35871f27e395ff9d78fa106c26fc/v0/medium/green_valley_affordable_livings-sewak_park-delhi-green_valley_builders.jpeg"
        alt="Green Valley Affordable livings"
      />
    </div>
    <div className="info">
      <div className="card-title">Green Valley Affordable livings</div>
      <div className="details">2, 3 BHK Apartments</div>
      <div className="location">Dwarka Mor, South West Delhi, New Delhi</div>
      <div className="price">₹23.5 L - ₹60.01 L</div>
      <button className="cta-button">Contact</button>
    </div>
  </a>
</div></SwiperSlide>
      <SwiperSlide><div className="property-card">
  <a href="/detail-page" target="_blank">
    <div className="image">
      <img
        src="https://housing-images.n7net.in/4f2250e8/1f3f35871f27e395ff9d78fa106c26fc/v0/medium/green_valley_affordable_livings-sewak_park-delhi-green_valley_builders.jpeg"
        alt="Green Valley Affordable livings"
      />
    </div>
    <div className="info">
      <div className="card-title">Green Valley Affordable livings</div>
      <div className="details">2, 3 BHK Apartments</div>
      <div className="location">Dwarka Mor, South West Delhi, New Delhi</div>
      <div className="price">₹23.5 L - ₹60.01 L</div>
      <button className="cta-button">Contact</button>
    </div>
  </a>
</div></SwiperSlide>
<SwiperSlide><div className="property-card">
  <a href="/detail-page" target="_blank">
    <div className="image">
      <img
        src="https://housing-images.n7net.in/4f2250e8/1f3f35871f27e395ff9d78fa106c26fc/v0/medium/green_valley_affordable_livings-sewak_park-delhi-green_valley_builders.jpeg"
        alt="Green Valley Affordable livings"
      />
    </div>
    <div className="info">
      <div className="card-title">Green Valley Affordable livings</div>
      <div className="details">2, 3 BHK Apartments</div>
      <div className="location">Dwarka Mor, South West Delhi, New Delhi</div>
      <div className="price">₹23.5 L - ₹60.01 L</div>
      <button className="cta-button">Contact</button>
    </div>
  </a>
</div></SwiperSlide>
<SwiperSlide><div className="property-card">
  <a href="/detail-page" target="_blank">
    <div className="image">
      <img
        src="https://housing-images.n7net.in/4f2250e8/1f3f35871f27e395ff9d78fa106c26fc/v0/medium/green_valley_affordable_livings-sewak_park-delhi-green_valley_builders.jpeg"
        alt="Green Valley Affordable livings"
      />
    </div>
    <div className="info">
      <div className="card-title">Green Valley Affordable livings</div>
      <div className="details">2, 3 BHK Apartments</div>
      <div className="location">Dwarka Mor, South West Delhi, New Delhi</div>
      <div className="price">₹23.5 L - ₹60.01 L</div>
      <button className="cta-button">Contact</button>
    </div>
  </a>
</div></SwiperSlide>
<SwiperSlide><div className="property-card">
  <a href="/detail-page" target="_blank">
    <div className="image">
      <img
        src="https://housing-images.n7net.in/4f2250e8/1f3f35871f27e395ff9d78fa106c26fc/v0/medium/green_valley_affordable_livings-sewak_park-delhi-green_valley_builders.jpeg"
        alt="Green Valley Affordable livings"
      />
    </div>
    <div className="info">
      <div className="card-title">Green Valley Affordable livings</div>
      <div className="details">2, 3 BHK Apartments</div>
      <div className="location">Dwarka Mor, South West Delhi, New Delhi</div>
      <div className="price">₹23.5 L - ₹60.01 L</div>
      <button className="cta-button">Contact</button>
    </div>
  </a>
</div></SwiperSlide>
<SwiperSlide><div className="property-card">
  <a href="/detail-page" target="_blank">
    <div className="image">
      <img
        src="https://housing-images.n7net.in/4f2250e8/1f3f35871f27e395ff9d78fa106c26fc/v0/medium/green_valley_affordable_livings-sewak_park-delhi-green_valley_builders.jpeg"
        alt="Green Valley Affordable livings"
      />
    </div>
    <div className="info">
      <div className="card-title">Green Valley Affordable livings</div>
      <div className="details">2, 3 BHK Apartments</div>
      <div className="location">Dwarka Mor, South West Delhi, New Delhi</div>
      <div className="price">₹23.5 L - ₹60.01 L</div>
      <button className="cta-button">Contact</button>
    </div>
  </a>
</div></SwiperSlide>
<SwiperSlide><div className="property-card">
  <a href="/detail-page" target="_blank">
    <div className="image">
      <img
        src="https://housing-images.n7net.in/4f2250e8/1f3f35871f27e395ff9d78fa106c26fc/v0/medium/green_valley_affordable_livings-sewak_park-delhi-green_valley_builders.jpeg"
        alt="Green Valley Affordable livings"
      />
    </div>
    <div className="info">
      <div className="card-title">Green Valley Affordable livings</div>
      <div className="details">2, 3 BHK Apartments</div>
      <div className="location">Dwarka Mor, South West Delhi, New Delhi</div>
      <div className="price">₹23.5 L - ₹60.01 L</div>
      <button className="cta-button">Contact</button>
    </div>
  </a>
</div></SwiperSlide>
{/* <SwiperSlide className="nextprevwidth"><div></div></SwiperSlide> */}
    </Swiper>
    </div>
  )
}

export default UnderConstruction
