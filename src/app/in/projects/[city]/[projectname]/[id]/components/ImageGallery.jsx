"use client"
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchData } from '../../../../../../_components/api/data';
import './ImageGallery.css';

const ImageGallery = ({ onClickImage }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetchData("detail-page",setImageData);
   }, []);
   
   const fetchData = async (endpoint, setter) => {
    try {
        const response = await axios.get( `http://localhost:8000/${endpoint}`);
        setter(response.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};
  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="imageWrapperDiv" onClick={onClickImage}>
        <div className="singleImageDiv">
          <img src={"/images/"+ imageData.dtlUnitGallery[0].mainImage} alt="Property image" />
        </div>
        <div className="multipleImageDiv">
          {imageData.dtlUnitGallery[0].multipleImages.map((image, index) => (
            <img key={index} src={"/images/"+image} alt={`Property image ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
