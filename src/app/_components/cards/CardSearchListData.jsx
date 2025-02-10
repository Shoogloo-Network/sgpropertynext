'use client'
import {  useState } from "react";
import { memo } from "react";
import "./CardSearchListData.css";
import City from "../../search/components/City";
import SearchFilterWithCards from "./SearchFilterWithCards";
import SearchContactForm from "../userform/SearchContactForm";
import RealEstateListings from "@/app/search/components/RealEstateListings";
import '../../agents/agent-details/AgentDetails.css'

const CardSearchListData = memo(({ cities }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedCity , setSelectedCity] = useState("");
  const filters = ["All", "New Launch", "Ready To Move", "Upcoming"];
  const handleFilterClick = (filter) => {
    
    setSelectedFilter(filter);
   
  };

  const selectedCityFn = (city)=>{
   setSelectedCity(city);
  }
  return (
    <>
      <div className="card-search-container">
        <div className="city-section">
          <div className="city-card">
            <div className="city-title">
              <img
                src="/images/location.png"
                alt="location"
                className="city-icon"
                width={20}
                height={20}
              />
              <h1 className="city-heading">City</h1>
            </div>
            <City cities={cities}  selectedCity={selectedCityFn}/>
    
          </div>
          <div className="filter-section">
      {/* Filter Tabs */}
      <div className="filter-tabs">
        {filters.map((filter) => (
          <div
            key={filter}
            className={`filter-tab ${selectedFilter === filter ? "active" : ""}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </div>
        ))}
      </div>

      {/* Dropdown */}
      <div className="filter-dropdown">
        <select>
          {["Most Luxurious", "Highest Rated", "Best Value", "Popular"].map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
        </div>
        <div className="contact-form-section">
          <SearchContactForm />
        </div>
      </div>
      <div className="filter-card-section">
        <div className="search-filter-with-cards">
        <SearchFilterWithCards data={cities} filterPara={selectedCity} />
        </div>
        <div className="advertisement-div"><RealEstateListings/></div>
      </div>
    </>
  );
});

CardSearchListData.displayName = "CardSearchListData";

export default CardSearchListData;
