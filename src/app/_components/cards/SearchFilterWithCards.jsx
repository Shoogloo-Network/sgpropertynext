import React, { useState } from 'react';
import Card from './Card';
import FormPopup from '../userform/FormPopup';

const SearchFilterWithCards = ({ data, filterPara }) => {
  const [showForm, setShowForm] = useState(false);

  const onCardClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <>
      {data?.map((city, index) =>
        filterPara === null ? (
          city.cardData?.map((item, idx) => (
            <div key={`${index}-${idx}`} className="card-search-list-data-item">
              <div className="card-search-list-header"></div>
              <div className="card-search-list-body">
                <Card
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  descriptionPrice={item.descriptionPrice}
                  iconCardData={item.iconCardData}
                  url={item.backgroundImage}
                  onClick={onCardClick}
                />
              </div>
            </div>
          ))
        ) : (
          city.cardData
            ?.filter((item) => item.city === filterPara)
            .map((item, idx) => (
              <div key={`${index}-${idx}`} className="card-search-list-data-item">
                <div className="card-search-list-header"></div>
                <div className="card-search-list-body">
                  <Card
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    descriptionPrice={item.descriptionPrice}
                    iconCardData={item.iconCardData}
                    url={item.backgroundImage}
                    onClick={onCardClick}
                  />
                </div>
              </div>
            ))
        )
      )}
      {showForm && <FormPopup onClose={() => setShowForm(false)} />}
    </>
  );
};

export default SearchFilterWithCards;
