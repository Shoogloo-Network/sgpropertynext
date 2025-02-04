import React from "react";
import "./RealEstateListings.css";

const listings = [
  {
    id: 1,
    title: "Luxury Apartment in Gurugram",
    price: "$2,500,000",
    developer: "ABC Developers",
    location: "Gurugram, Haryana",
    image: "ad1.avif",
  },
  {
    id: 2,
    title: "Modern Villa in Delhi",
    price: "$3,800,000",
    developer: "XYZ Builders",
    location: "Uttam Nagar, Delhi",
    image: "ad1.avif",
  },
  {
    id: 3,
    title: "Cozy Condo in Meerut",
    price: "$1,200,000",
    developer: "Sunshine Realty",
    location: "Meerut, UP",
    image: "ad1.avif",
  },
];

const RealEstateListings = () => {
  return (
    <div className="listings-container">
      {listings.map((listing) => (
        <div key={listing.id} className="listing-card">
          <span className="ad-tag">Ad</span>
          <img src={"/images/"+listing.image} alt={listing.title} className="listing-image" />
          <div className="listing-details">
            <h3 className="listing-title">{listing.title}</h3>
            <p className="listing-price">{listing.price}</p>
            <p className="listing-developer">{listing.developer}</p>
            <p className="listing-location">{listing.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RealEstateListings;
