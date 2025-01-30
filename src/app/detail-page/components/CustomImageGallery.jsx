import { useEffect, useState, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import ContactForm from '../../_components/userform/ContactForm';
import IconCard from '../../_components/cards/IconCard';
import './CustomImageGallery.css';
import { fetchData } from '../../_components/api/data';

const CustomImageGallery = ({ close }) => {
  const [selectedName, setSelectedName] = useState('projects');
  const [activeIndex, setActiveIndex] = useState(null); // State to track active button index
  const [images, setImages] = useState({}); // State for storing fetched image data

  // Fetch image data from the JSON Server API
  useEffect(() => {
    fetchData("gallery",setImages);
  }, []);

  const iconCardData = [
    {
      img: '/zero-brokerage.svg',
      title: 'Zero Brokerage',
      description: '100% Service, 0% Brokerage',
    },
    {
      img: '/lowest-price.svg',
      title: 'Lowest Price Guaranteed',
      description: 'If you find a lower price anywhere, tell us and we will match it.',
    },
    {
      img: '/full-service-support.svg',
      title: 'Full Service Support',
      description: 'Our sales personnel are accountable for every step',
    },
  ];

  const galleryRef = useRef(null);

  const handleSlideToIndex = (index) => {
    galleryRef.current.slideToIndex(index);
    setActiveIndex(index);
  };

  // Only attempt to get images when `images` is populated and `selectedName` exists in `images`
  const selectedImages = images[selectedName] ? images[selectedName] : [];

  return (
    <div className="custom-image-gallery">
      {/* Header */}
      <div className="header">
        <div className='header-options'>
          <p className={selectedName === 'projects' ? 'active' : ''} onClick={() => { setSelectedName('projects'); handleSlideToIndex(0); }}>Projects</p>
          <p className={selectedName === 'units' ? 'active' : ''} onClick={() => { setSelectedName('units'); handleSlideToIndex(0); }}>Units</p>
          <p className={selectedName === 'locality' ? 'active' : ''} onClick={() => { setSelectedName('locality'); handleSlideToIndex(0); }}>Locality</p>
        </div>
        <div><span onClick={close}> X</span></div>
      </div>

      {/* Layout for Gallery and Form/Zero Brokerage Section */}
      <div className="gallery-and-info">
        {/* Gallery Section */}
        <div className="gallery-section">
          <div className="gallery-buttons">
            {/* Render buttons only when images are loaded */}
            {selectedImages.length > 0 ? (
              selectedImages.map((image, index) => (
                <button key={index} onClick={() => handleSlideToIndex(index)} className={activeIndex === index ? 'active' : ''}>
                  {image.description || `Image ${index + 1}`}
                </button>
              ))
            ) : (
              <p>Loading images...</p> // Display loading text while images are being fetched
            )}
          </div>

          {/* Image Gallery */}
          {selectedImages.length > 0 ? (
            <ImageGallery
              ref={galleryRef}
              items={selectedImages}
              showThumbnails={true}
              showFullscreenButton={true}
              showPlayButton={false}
              showNav={true}
            />
          ) : (
            <p>No images available.</p> // Display message if no images are found
          )}
        </div>

        {/* Form and IconCard Section */}
        <div className="info-section">
          <ContactForm />
          <div className='info-section-card'>
          <h4>Why Invest through Square Yards?</h4>
        
         <IconCard data={iconCardData} />
       
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomImageGallery;
