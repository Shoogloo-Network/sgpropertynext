import { useRef, useState } from 'react';
import './UploadAndDisplay.css'
const UploadAndDisplayMultiple = () => {
  // Define a state variable to store the selected images
  const [selectedImages, setSelectedImages] = useState([]);
  const refElement = useRef();
  const [selectedOption, setSelectedOption] = useState("1");
  // Function to handle image removal
  const removeImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };
 const clickMe = ()=>{
    refElement.current.click();
 }
  // Function to handle image selection
  const handleImageChange = (event) => {
    console.log(event);
    const files = Array.from(event.target.files);
    setSelectedImages((prevImages) => [...prevImages, ...files]);
  };
  // Function to handle select change
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Return the JSX for rendering
  return (
    <div>
  <div className="image-upload-box" onClick={clickMe}>
  <img src="../../src/assets/icon/add-photo-bg.svg" alt="Upload" className="image-upload-icon" />
  <div className="image-upload-content">
    <div className="upload-info">
      <span className="plus-icon">+</span>
      <p className="add-picture-text">Add </p>
    </div>
    <p className="listing-info">
      Property Listings with more than 5 images get 3x more views.
    </p>
  </div>
  <div className="image-format-info">
    <p>Accepted formats are .jpg, .gif, .bmp & .png and Maximum size allowed 10 MB</p>
  </div>
</div>


      {/* Conditionally render the selected images if they exist */}
      {selectedImages.length > 0 && (
  <div className="selected-images-container">
    {selectedImages.map((image, index) => (
      <div key={index} className="image-preview-box">
        {/* Display the selected image */}
        <img
          alt="preview"
          width={"250px"}
          height={"200px"}
          src={URL.createObjectURL(image)}
          className="selected-image"
          
         
        />
        <br /> <br />
        {/* Button to remove the selected image */}
        <button onClick={() => removeImage(index)} className="remove-image-btn">X</button>
        <div className="select-container">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="1">Exterior View</option>
          <option value="2">Bed Room View</option>
          <option value="3">Interior Desgin</option>
          <option value="4">Furnised Amenities</option>
          <option value="5">Garden</option>
          <option value="6">Gym</option>
          <option value="7">Parking</option>
          <option value="8">Terrace</option>
        </select>
      </div>
      </div>
    ))}
  </div>
)}


      <br />

      {/* Input element to select image files */}
      <input
        type="file"
        name="myImages"
        multiple
        // Event handler to capture file selection and update the state
        onChange={handleImageChange}
        hidden
        ref={refElement}
      />
    </div>
  );
};

export default UploadAndDisplayMultiple;
