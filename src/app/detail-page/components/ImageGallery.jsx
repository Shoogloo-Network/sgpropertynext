import  { useState, useEffect } from 'react';
import { fetchData } from '../../_components/api/data';
import './ImageGallery.css';

const ImageGallery = ({ onClickImage }) => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetchData("galleryImages",setImageData);
   }, []);

  if (!imageData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="imageWrapperDiv" onClick={onClickImage}>
        <div className="singleImageDiv">
          <img src={`images/${imageData[0].mainImage}`} alt="Property image" />
        </div>
        <div className="multipleImageDiv">
          {imageData[0].multipleImages.map((image, index) => (
            <img key={index} src={`images/${image}`} alt={`Property image ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGallery;
