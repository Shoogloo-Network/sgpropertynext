import { memo } from "react";
import "./CardSearchListData.css";
import City from "../../search/components/City";
import SearchFilterWithCards from "./SearchFilterWithCards";
import SearchContactForm from "../userform/SearchContactForm";

const CardSearchListData = memo(({ cities }) => {
  return (
    <>
      <div className="card-search-container">
        <div className="city-section">
          <div className="city-card">
            <div className="city-title">
              <img
                src="images/location.png"
                alt="location"
                className="city-icon"
                width={20}
                height={20}
              />
              <h1 className="city-heading">City</h1>
            </div>
            <City cities={cities} />
          </div>
        </div>
        <div className="contact-form-section">
          <SearchContactForm />
        </div>
      </div>
      <div className="filter-card-section">
        <div className="search-filter-with-cards">
        <SearchFilterWithCards data={cities} />
        </div>
        <div className="advertisement-div"></div>
      </div>
    </>
  );
});

CardSearchListData.displayName = "CardSearchListData";

export default CardSearchListData;
