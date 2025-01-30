import { useState } from 'react';
import './AdditionalAttributes.css';

const AdditionalAttributesAmenities = () => {
  const [formData, setFormData] = useState({
    definingLocation: ["School in Vinity", "Adjoining Metro Station"],
    explainingPrice: ["Desparate Sell"],
    definingSizeStructure: "Semi-Furnished",
    suitableFor: "5-7",
  });
const handleSubmit = ()=>{
    console.log(formData);
}
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedLocation = checked
          ? [...prev.definingLocation, value]
          : prev.definingLocation.filter((location) => location !== value);
        return { ...prev, definingLocation: updatedLocation };
      });
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div id="additionalAttributes">
      {/* definingLocation */}
      <div className="form-group" data-attribute={18}>
        <label>Defining Location</label>
        <div className="flexBox number">
          {["School in Vinity", "Adjoining Metro Station", "Wide Road", "Near City Center"].map((room) => (
            <div className="customCheckBox" key={room}>
              <input
                type="checkbox"
                className="checkBox"
                name="definingLocation"
                value={room}
                id={`defining_location_${room.toLowerCase().replace(" ", "_")}`}
                checked={formData.definingLocation.includes(room)}
                onChange={handleChange}
              />
              <label htmlFor={`defining_location_${room.toLowerCase().replace(" ", "_")}`}>{room}</label>
            </div>
          ))}
        </div>
      </div>

      {/* explainingPrice */}
      <div className="form-group" data-attribute={1}>
        <label>Explaining Price</label>
        <div className="flexBox number">
          {["Desparate Sell", "Break Through Price", "Quick Deal", "Investment Deal"].map((status) => (
            <div className="customRadioBox" key={status}>
              <input
                type="radio"
                className="radio"
                name="explainingPrice"
                value={status}
                id={`explaining_price_${status.toLowerCase().replace(" ", "_")}`}
                checked={formData.explainingPrice.includes(status)}
                onChange={handleChange}
              />
              <label htmlFor={`explaining_price_${status.toLowerCase().replace(" ", "_")}`}>{status}</label>
            </div>
          ))}
        </div>
      </div>

      {/* definingSizeStructure */}
      <div className="form-group" data-attribute={2}>
        <label>Defining Size & Structure</label>
        <div className="flexBox number">
          {["Furnished", "Semi-Furnished", "Unfurnished"].map((status) => (
            <div className="customRadioBox" key={status}>
              <input
                type="radio"
                className="radio"
                name="definingSizeStructure"
                value={status}
                id={`defining_size_structure_${status.toLowerCase().replace(" ", "_")}`}
                checked={formData.definingSizeStructure === status}
                onChange={handleChange}
              />
              <label htmlFor={`defining_size_structure_${status.toLowerCase().replace(" ", "_")}`}>{status}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Suitable For */}
      <div className="form-group" data-attribute={1}>
        <label>Suitable For</label>
        <div className="flexBox number">
          {["0-1", "2-4", "5-7", "7-9", "10+"].map((status) => (
            <div className="customRadioBox" key={status}>
              <input
                type="radio"
                className="radio"
                name="suitableFor"
                value={status}
                id={`suitable_for_${status.toLowerCase().replace(" ", "_")}`}
                checked={formData.suitableFor === status}
                onChange={handleChange}
              />
              <label htmlFor={`suitable_for_${status.toLowerCase().replace(" ", "_")}`}>{status}</label>
            </div>
          ))}
        </div>
      </div>
      {/* Property Description */}
      <div className="form-group" data-attribute={19}>
        <label>Property Description</label>
        <textarea
          className="property-description-input"
          name="propertyDescription"
          value={formData.propertyDescription}
          onChange={handleChange}
          placeholder="Enter the property description here..."
        />
      </div>

      {/* Submit Button */}
      <div className="form-group">
        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdditionalAttributesAmenities;
