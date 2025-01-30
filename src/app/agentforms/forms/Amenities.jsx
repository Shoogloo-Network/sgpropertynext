import  { useState } from 'react';
import './Amenities.css'
import AdditionalAttributesAmenities from '../components/AdditionalAttributesAmenities';
const amenitiesList = {
  wifi: 'Wi-Fi',
  pool: 'Swimming Pool',
  gym: 'Gym',
  parking: 'Parking',
  breakfast: 'Breakfast Included',
  spa: 'Spa',
  bar: 'Bar',
  restaurant: 'Restaurant',
  laundry: 'Laundry Service',
  airConditioning: 'Air Conditioning',
  petFriendly: 'Pet Friendly',
  airportShuttle: 'Airport Shuttle',
  roomService: 'Room Service',
  nonSmoking: 'Non-Smoking Rooms',
  familyRooms: 'Family Rooms',
  fitnessCenter: 'Fitness Center',
  businessCenter: 'Business Center',
  conferenceRoom: 'Conference Room',
  wheelchairAccessible: 'Wheelchair Accessible',
  freeParking: 'Free Parking',
  freeWifi: 'Free Wi-Fi',
  hotTub: 'Hot Tub',
  sauna: 'Sauna',
  tennisCourt: 'Tennis Court',
  golfCourse: 'Golf Course',
  beachAccess: 'Beach Access',
  babysitting: 'Babysitting Services',
  concierge: 'Concierge Service',
  miniBar: 'Mini Bar',
  kitchenette: 'Kitchenette'
};

const Amenities = () => {
  const [selectedAmenities, setSelectedAmenities] = useState({});

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedAmenities((prevState) => ({
      ...prevState,
      [name]: checked
    }));
  };

  return (
    <div className='main-div-amenities'>
     <h3>Select Amenities</h3>
     <hr/>
     <div className='amenities-main'>
     
     {Object.keys(amenitiesList).map((amenity) => (
       <div key={amenity} className='amenities-input'>
         <input
           type="checkbox"
           name={amenity}
           checked={selectedAmenities[amenity] || false}
           onChange={handleCheckboxChange}
         />
         <label className='amenities-logo'>{amenitiesList[amenity]}</label>
       </div>
     ))}
   </div>
   <div>
    <div className='additional-attributes-amenities-heading'>
      <h3>Defined Your Property : </h3>
      <p>Please Select the Key Words That Your Property Offers</p>
      <hr/>
    </div>
   
    <div >
     <AdditionalAttributesAmenities/>
    </div>
   </div>
    </div>
   
  );
};

export default Amenities;
