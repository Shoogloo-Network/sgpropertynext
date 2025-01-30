import React, { useState } from 'react';
import Card from './Card';
import FormPopup from '../userform/FormPopup';
import './SearchFilterWithCards.css'; // Import the CSS file

const SearchFilterWithCards = ({ data }) => {
  const [showForm, setShowForm] = useState(false);

  const onCardClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowForm(true);
    console.log('Clicked Card Data:', item); // Added console log
  };

  return (
    console.log(data),
    <>
      {data?.map((city) =>
        city.cardData?.map((city) => (
          <div key={city.name} className="card-search-list-data-item">
            <div className="card-search-list-header"></div>
            <div className="card-search-list-body">
              <Card
                image={city.image}
                title={city.title}
                description={city.description}
                descriptionPrice={city.descriptionPrice}
                iconCardData={city.iconCardData}
                url={city.backgroundImage}
                onClick={onCardClick}
              />
            </div>
          </div>
        ))
      )}
      {showForm && <FormPopup onClose={() => setShowForm(false)} />}
    </>
  );
};

export default SearchFilterWithCards;
