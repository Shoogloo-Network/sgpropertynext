"use client"
import React from 'react'
import {useState} from 'react'
import { useRouter } from 'next/navigation';

import './ReadyToMove.css'
const ReadyToMove = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Delhi');
   const [cardData, setCardData] = useState(
     [
     {
       imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
       url:"/detail-page",
     },
     {
      imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
       url:"/detail-page",
     },
     {
      imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
       url:"/detail-page",
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
         title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
         url:"/detail-page",
       },
      
     ],
     'Gurgaon': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Gurgaon Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Gurgaon Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Gurgaon Design',
         url:"/detail-page",
       },
       
     ],
     'Noida': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Noida Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Noida Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Noida Design',
         url:"/detail-page",
       },
       
     ],
     'Uttar Pardesh': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Uttar Pardesh Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Uttar Pardesh Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Uttar Pardesh Design',
         url:"/detail-page",
       },
       
     ],
     'Haryana': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Haryana Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Haryana Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Haryana Design',
         url:"/detail-page",
       },
       
     ],
     'Gujrat': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Gujrat Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Gujrat Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Gujrat Design',
         url:"/detail-page",
       },
       
     ],
     'Mumbai': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Mumbai Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Mumbai Design',
         url:"/detail-page",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Mumbai Design',
         url:"/detail-page",
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
             <img src={"/images/"+card.imgSrc} alt="Card Image" onClick={()=>{router.push(card.url)} }/>
             <h4>{card.title}</h4>
           </div>
         ))}
       </div>
     </div>
   );
}

export default ReadyToMove
