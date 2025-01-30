import { useState } from 'react';
import './HomeInteriorCategory.css';

const HomeInteriorCategory = () => {
  const [activeTab, setActiveTab] = useState('Living Room');
  const [cardData, setCardData] = useState(
    [
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
    {
      imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
      title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
    },
  ] 
);

  const tabs = [
    { id: 'about-builder-wardrobe', title: 'Living Room' },
    { id: 'about-builder-modular-kitchen', title: 'Modular Kitchen' },
    { id: 3, title: 'Wardrobe' },
    { id: '4', title: 'Master Bedroom' },
    { id: '5', title: 'Kids Room' },
    { id: 6, title: 'Kitchen Walls Tiles' },
    { id: '7', title: 'Kitchen False Ceiling' },
  ];

 
  const data = {

    'Living Room': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Luxury Contemporary Living Room Design With L Shaped Sofa'
      },
    ],
    'Modular Kitchen': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Modular Kitchen Design'
      },
    ],
    'Wardrobe': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Spacious Wardrobe Design'
      },
    ],
    'Master Bedroom': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Elegant Master Bedroom Design'
      },
    ],
    'Kids Room': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {  imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Fun and Colorful Kids Room Design'
      },
    ],
    'Kitchen Walls Tiles': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Stylish Kitchen Walls Tiles Design'
      },
    ],
    'Kitchen False Ceiling': [
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
      {
        imgSrc: '../src/assets/propertyImage/provident-botanico-project-clubhouse-external-image1-2344.jpg',
        title: 'Modern Kitchen False Ceiling Design'
      },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab.title);
    setCardData(data[tab.title] || []);
  };
  return (
    <div className="homeinterior-container">
      <div className="homeinterior-section">
        {tabs.map((tab, index) => (
          <div
            key={tab.title}
            className={`homeinterior-item ${activeTab === tab.title ? 'homeinterior-item-active' : ''}`}
            id={tab.id}
            onClick={() => handleTabClick(tab, index)}
          >
            <p>{tab.title}</p>
          </div>
        ))}
      </div>
      <div className="homeinterior-section-card">
        {cardData.map((card, index) => (
          <div key={index} className="homeinterior-item-card">
            <img src={card.imgSrc} alt="Card Image" />
            <h4>{card.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default HomeInteriorCategory;
