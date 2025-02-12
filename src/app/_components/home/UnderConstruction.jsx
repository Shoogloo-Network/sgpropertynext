"use client";
import React, { useState } from "react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./UnderConstruction.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Data object with properties categorized by city
const cityData = {
  gurugram: [
    {
      id: 1,
      title: "Property in Gurugram 1",
      details: "2, 3 BHK Apartments",
      location: "Sector 15, Gurugram",
      price: "₹30 L - ₹70 L",
      img: "flats.avif",
      link: "/property/gurugram/1",
    },
    {
      id: 2,
      title: "Property in Gurugram 2",
      details: "2, 3 BHK Apartments",
      location: "Sector 20, Gurugram",
      price: "₹35 L - ₹75 L",
      img: "flats.avif",
      link: "/property/gurugram/2",
    },{
      id: 3,
      title: "Property in Gurugram 1",
      details: "2, 3 BHK Apartments",
      location: "Sector 15, Gurugram",
      price: "₹30 L - ₹70 L",
      img: "flats.avif",
      link: "/property/gurugram/1",
    },
    {
      id: 4,
      title: "Property in Gurugram 2",
      details: "2, 3 BHK Apartments",
      location: "Sector 20, Gurugram",
      price: "₹35 L - ₹75 L",
      img: "flats.avif",
      link: "/property/gurugram/2",
    },{
      id: 5,
      title: "Property in Gurugram 1",
      details: "2, 3 BHK Apartments",
      location: "Sector 15, Gurugram",
      price: "₹30 L - ₹70 L",
      img: "flats.avif",
      link: "/property/gurugram/1",
    },
    {
      id: 6,
      title: "Property in Gurugram 2",
      details: "2, 3 BHK Apartments",
      location: "Sector 20, Gurugram",
      price: "₹35 L - ₹75 L",
      img: "flats.avif",
      link: "/property/gurugram/2",
    },{
      id: 7,
      title: "Property in Gurugram 1",
      details: "2, 3 BHK Apartments",
      location: "Sector 15, Gurugram",
      price: "₹30 L - ₹70 L",
      img: "flats.avif",
      link: "/property/gurugram/1",
    },
    {
      id: 8,
      title: "Property in Gurugram 2",
      details: "2, 3 BHK Apartments",
      location: "Sector 20, Gurugram",
      price: "₹35 L - ₹75 L",
      img: "flats.avif",
      link: "/property/gurugram/2",
    },
  ],
  noida: [
    {
      id: 9,
      title: "Property in Noida 1",
      details: "2, 3 BHK Apartments",
      location: "Sector 44, Noida",
      price: "₹25 L - ₹60 L",
      img: "flats.avif",
      link: "/property/noida/1",
    },
    {
      id: 10,
      title: "Property in Noida 2",
      details: "2, 3 BHK Apartments",
      location: "Sector 50, Noida",
      price: "₹28 L - ₹65 L",
      img: "flats.avif",
      link: "/property/noida/2",
    },
    {
      id: 11,
      title: "Property in Noida 1",
      details: "2, 3 BHK Apartments",
      location: "Sector 44, Noida",
      price: "₹25 L - ₹60 L",
      img: "flats.avif",
      link: "/property/noida/1",
    },
    {
      id: 12,
      title: "Property in Noida 2",
      details: "2, 3 BHK Apartments",
      location: "Sector 50, Noida",
      price: "₹28 L - ₹65 L",
      img: "flats.avif",
      link: "/property/noida/2",
    },
    {
      id: 13,
      title: "Property in Noida 1",
      details: "2, 3 BHK Apartments",
      location: "Sector 44, Noida",
      price: "₹25 L - ₹60 L",
      img: "flats.avif",
      link: "/property/noida/1",
    },
    {
      id: 14,
      title: "Property in Noida 2",
      details: "2, 3 BHK Apartments",
      location: "Sector 50, Noida",
      price: "₹28 L - ₹65 L",
      img: "flats.avif",
      link: "/property/noida/2",
    },
    {
      id: 15,
      title: "Property in Noida 1",
      details: "2, 3 BHK Apartments",
      location: "Sector 44, Noida",
      price: "₹25 L - ₹60 L",
      img: "flats.avif",
      link: "/property/noida/1",
    },
    {
      id: 16,
      title: "Property in Noida 2",
      details: "2, 3 BHK Apartments",
      location: "Sector 50, Noida",
      price: "₹28 L - ₹65 L",
      img: "flats.avif",
      link: "/property/noida/2",
    },
  ],
  delhi: [
    {
      id: 17,
      title: "Property in Delhi 1",
      details: "2, 3 BHK Apartments",
      location: "Dwarka, Delhi",
      price: "₹23.5 L - ₹60.01 L",
      img: "flats.avif",
      link: "/property/delhi/1",
    },
    {
      id: 18,
      title: "Property in Delhi 2",
      details: "2, 3 BHK Apartments",
      location: "Rohini, Delhi",
      price: "₹26 L - ₹62 L",
      img: "flats.avif",
      link: "/property/delhi/2",
    },
  ],
  surat: [
    {
      id: 19,
      title: "Property in Surat 1",
      details: "2, 3 BHK Apartments",
      location: "Ring Road, Surat",
      price: "₹20 L - ₹50 L",
      img: "flats.avif",
      link: "/property/surat/1",
    },
    {
      id: 20,
      title: "Property in Surat 2",
      details: "2, 3 BHK Apartments",
      location: "Adajan, Surat",
      price: "₹22 L - ₹55 L",
      img: "flats.avif",
      link: "/property/surat/2",
    },
  ],
};

// A reusable card component to display each property
const PropertyCard = ({ property }) => (
  <div className="property-card">
    <a href={property.link} target="_blank" rel="noopener noreferrer">
      <div className="image">
        <img src={`/images/${property.img}`} alt={property.title} />
      </div>
      <div className="info">
        <div className="card-title">{property.title}</div>
        <div className="details">{property.details}</div>
        <div className="location">{property.location}</div>
        <div className="price">{property.price}</div>
        <button className="cta-button">Contact</button>
      </div>
    </a>
  </div>
);

const UnderConstruction = () => {
  // Default active city is Gurugram
  const [selectedCity, setSelectedCity] = useState("gurugram");

  // List of cities based on keys of the data object
  const cities = Object.keys(cityData);

  return (
    <div className="under-construction-main-div">
      {/* Tabs for city selection */}
      <div className="tabs">
        {cities.map((city) => (
          <button
            key={city}
            className={`tab ${selectedCity === city ? "active" : ""}`}
            onClick={() => setSelectedCity(city)}
          >
            {city.charAt(0).toUpperCase() + city.slice(1)}
          </button>
        ))}
      </div>

      {/* Swiper slider for the selected city */}
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        onSwiper={(swiper) => console.log("Swiper initialized", swiper)}
        onSlideChange={() => console.log("Slide changed")}
        style={{ height: "100%" }}
        aria-label="Under Construction Properties Slider"
      >
    
        {cityData[selectedCity].map((property) => (
          <SwiperSlide key={property.id}>
           
            <PropertyCard property={property} />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </div>
  );
};

export default UnderConstruction;
