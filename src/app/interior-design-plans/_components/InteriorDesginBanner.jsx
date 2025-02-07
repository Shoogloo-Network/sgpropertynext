"use client"
import React, { useRef, useState, useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
// import { fetchData } from '../../_components/api/data';


const InteriorDesignBanner = () => {
    const galleryRef = useRef(null);

    // const [fetchedImages, setFetchedImages] = useState([]); // Initialize as an empty array
    // Fetch image data from the JSON Server API
    // useEffect(() => {
    //     fetchData("gallery", setFetchedImages);
    // }, []);

    const images = [
        {
            original: '/images/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            thumbnail: '/images/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            description: 'Living Room Design'
        },
        {
            original: '/images/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            thumbnail: '/images/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            description: 'Modern Kitchen'
        },
        {
            original: '/images/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            thumbnail: '/images/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            description: 'Cozy Bedroom'
        },
        {
            original: '/images/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            thumbnail: '/images/provident-botanico-project-clubhouse-external-image1-2344.jpg',
            description: 'Elegant Bathroom'
        }
    ];
    // Use fetched images if available, otherwise use the default images
    const selectedImages = images.length > 0 ? images : images;
    
    return (
        <div>
            <ImageGallery
                ref={galleryRef}
                items={selectedImages}
                showThumbnails={true}
                showFullscreenButton={true}
                showPlayButton={false}
                showNav={true}
            />
        </div>
    );
}

export default InteriorDesignBanner;
