import React, { useState } from 'react';
import './City.css';

const City = ({ cities, selectedCity }) => {
  const [activeCity, setActiveCity] = useState(null);

  const handleCardClick = (cityName) => {
    setActiveCity(cityName);
    selectedCity(cityName);
  };

  return (
    <div className="city-container">
      {cities?.map((city) =>
        city.cities?.map((city,index) => (
          <div
            key={index}
            className={`city-card ${activeCity === city.name ? 'active' : ''}`}
            onClick={() => handleCardClick(city.name)}
          >
            <p className="city-card-name">{city.name}</p>
            <p className="city-card-user-number">({city.userNumber})</p>
          </div>
        ))
      )}
    </div>
  );
};

export default City;
