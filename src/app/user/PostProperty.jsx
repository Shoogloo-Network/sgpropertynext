import { useState } from 'react';
import './PostProperty.css';

const PropertyForm = ({active}) => {
  // Initialize state using useState hook
  const [formData, setFormData] = useState({
    listingType: '1', // Default value for Sale
    buildingType: '1', // Default value for Residential
    propertyType: '1', // Default value for Apartment
    city: '',
    project: '',
    locality: '',
    numberOfRooms: '2', // Default value
    area: '',
    areaType: '27', // Default value for Built-up Area
    areaUOM: '23' // Default value for Sq. Yd.
  });

  const [rent, setRent] = useState(true);

  // Handle change for radio inputs and text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Only toggle rent state if the 'Rent' radio button is clicked
    if (e.target.name === 'listingType') {
      setRent(value === '0'); // Rent is selected if value is '0'
    }
  };

  // Handle form submission to log the data to the console
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="rightBox postYourPropertyBox">
      
      <div className="addListingsBox" id="addListingsBox1">
        <h1>Provide Property Details</h1>
        <form onSubmit={handleSubmit}>
          <div className="listBody">
            {/* Property Listing for Sale or Rent */}
            <div className="form-group">
              <label>Property Listing for</label>
              <div className="flexBox">
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="listingType"
                    value="1"
                    id="listing-type-1"
                    checked={formData.listingType === '1'}
                    onChange={handleChange}
                  />
                  <label htmlFor="listing-type-1">Sale</label>
                </div>
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="listingType"
                    value="0"
                    id="listing-type-0"
                    checked={formData.listingType === '0'}
                    onChange={handleChange}
                  />
                  <label htmlFor="listing-type-0">Rent</label>
                </div>
              </div>
            </div>

            {/* Conditional Building Type (Residential or Commercial) */}
            {!rent && (
              <div className="form-group">
                <label>Building Type</label>
                <div className="flexBox">
                  <div className="customRadioBox">
                    <input
                      type="radio"
                      className="radio"
                      name="buildingType"
                      value="1"
                      id="building-type-1"
                      checked={formData.buildingType === '1'}
                      onChange={handleChange}
                    />
                    <label htmlFor="building-type-1">Residential</label>
                  </div>
                  <div className="customRadioBox">
                    <input
                      type="radio"
                      className="radio"
                      name="buildingType"
                      value="2"
                      id="building-type-2"
                      checked={formData.buildingType === '2'}
                      onChange={handleChange}
                    />
                    <label htmlFor="building-type-2">Commercial</label>
                  </div>
                </div>
              </div>
            )}

            {/* Property Type */}
            <div className="form-group">
              <label>Property Type</label>
              <div className="flexBox">
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="propertyType"
                    value="1"
                    id="property-type-1"
                    checked={formData.propertyType === '1'}
                    onChange={handleChange}
                  />
                  <label htmlFor="property-type-1">Apartment</label>
                </div>
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="propertyType"
                    value="2"
                    id="property-type-2"
                    checked={formData.propertyType === '2'}
                    onChange={handleChange}
                  />
                  <label htmlFor="property-type-2">Villa</label>
                </div>
              </div>
            </div>

            {/* City */}
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={formData.city}
                placeholder="Please enter city name"
                onChange={handleChange}
              />
            </div>

            {/* Project */}
            <div className="form-group">
              <label>Project/Building Name</label>
              <input
                type="text"
                name="project"
                className="form-control"
                value={formData.project}
                placeholder="Start Typing Project/Society Name For Suggestions"
                onChange={handleChange}
              />
            </div>

            {/* Locality */}
            <div className="form-group">
              <label>Locality</label>
              <input
                type="text"
                name="locality"
                className="form-control"
                value={formData.locality}
                placeholder="Start Typing Locality Name For Suggestions"
                onChange={handleChange}
              />
            </div>

            {/* Number of Rooms */}
            <div className="form-group">
              <label>Number of Rooms</label>
              <div className="flexBox number">
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="numberOfRooms"
                    value="Studio"
                    id="number_of_rooms_studio"
                    checked={formData.numberOfRooms === 'Studio'}
                    onChange={handleChange}
                  />
                  <label htmlFor="number_of_rooms_studio">Studio</label>
                </div>
                <div className="customRadioBox">
                  <input
                    type="radio"
                    className="radio"
                    name="numberOfRooms"
                    value="1 Rk"
                    id="number_of_rooms_1_rk"
                    checked={formData.numberOfRooms === '1 Rk'}
                    onChange={handleChange}
                  />
                  <label htmlFor="number_of_rooms_1_rk">1 Rk</label>
                </div>
                {/* Add other room options here */}
              </div>
            </div>

            {/* Area and Area Type */}
            <div className="form-group">
              <label>Area Details</label>
              <div className="flexBox">
                <input
                  type="text"
                  name="area"
                  className="form-control"
                  value={formData.area}
                  placeholder="Enter Area Value"
                  onChange={handleChange}
                />
                <select
                  className="styled-select form-control"
                  name="areaType"
                  value={formData.areaType}
                  onChange={handleChange}
                >
                  <option value="27">Built-up Area</option>
                  <option value="28">Carpet Area</option>
                </select>
                <select
                  className="styled-select form-control"
                  name="areaUOM"
                  value={formData.areaUOM}
                  onChange={handleChange}
                >
                  <option value="23">Sq. Yd.</option>
                  <option value="24">Sq. Ft.</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" onClick={()=>{active(true)}}>Save & Next</button>
        </form>
      </div>
    </div>
  );
};

export default PropertyForm;
