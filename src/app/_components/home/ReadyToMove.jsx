"use client"
import React from 'react'
import {useState} from 'react'
import './ReadyToMove.css'
const ReadyToMove = () => {
  const [activeTab, setActiveTab] = useState('Delhi');
   const [cardData, setCardData] = useState(
     [
     {
       imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Delhi Design With L Shaped Sofa'
     },
     {
      imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Delhi Design With L Shaped Sofa'
     },
     {
      imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Delhi Design With L Shaped Sofa'
     },
     
   ] 
 );
 
   const tabs = [
     { id: 'about-builder-Noida', title: 'Delhi' },
     { id: 'about-builder-modular-kitchen', title: 'Gurgaon' },
     { id: 3, title: 'Noida' },
     { id: '4', title: 'Uttar Pardesh' },
     { id: '5', title: 'Haryana' },
     { id: 6, title: 'Gujrat' },
     { id: '7', title: 'Mumbai' },
   ];
 
  
   const data = {
 
     'Delhi': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Delhi Design With L Shaped Sofa'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Delhi Design With L Shaped Sofa'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Delhi Design With L Shaped Sofa'
       },
      
     ],
     'Gurgaon': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Gurgaon Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Gurgaon Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Gurgaon Design'
       },
       
     ],
     'Noida': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Noida Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Noida Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Noida Design'
       },
       
     ],
     'Uttar Pardesh': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Uttar Pardesh Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Uttar Pardesh Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Uttar Pardesh Design'
       },
       
     ],
     'Haryana': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Haryana Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Haryana Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Haryana Design'
       },
       
     ],
     'Gujrat': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Gujrat Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Gujrat Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Gujrat Design'
       },
       
     ],
     'Mumbai': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Mumbai Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Mumbai Design'
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Mumbai Design'
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
             <img src={"/images/"+card.imgSrc} alt="Card Image" />
             <h4>{card.title}</h4>
           </div>
         ))}
       </div>
     </div>
   );
}

export default ReadyToMove
