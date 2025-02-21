"use client"
import React from 'react'
import {useState} from 'react'
import './HomeCategory.css'
import { useRouter } from 'next/navigation';
const HomeCategory = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('Living Room');
   const [cardData, setCardData] = useState(
     [
     {
       imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Living Room Design With L Shaped Sofa',
       url:"/in/home-interior/living-room/1" ,
     },
     {
      imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Living Room Design With L Shaped Sofa',
       url:"/in/home-interior/living-room/2" ,
     },
     {
      imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Living Room Design With L Shaped Sofa',
       url:"/in/home-interior/living-room/3" ,
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
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Living Room Design With L Shaped Sofa',
         url:"/in/home-interior/living-room/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Living Room Design With L Shaped Sofa',
         url:"/in/home-interior/living-room/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Living Room Design With L Shaped Sofa',
         url:"/in/home-interior/living-room/1" ,
       },
      
     ],
     'Modular Kitchen': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Modular Kitchen Design',
         url:"/in/home-interior/modular-kitchen/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Modular Kitchen Design',
         url:"/in/home-interior/modular-kitchen/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Modular Kitchen Design',
         url:"/in/home-interior/modular-kitchen/1" ,
       },
       
     ],
     'Wardrobe': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Wardrobe Design',
         url:"/in/home-interior/wardrobe/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Wardrobe Design',
         url:"/in/home-interior/wardrobe/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Wardrobe Design',
         url:"/in/home-interior/wardrobe/1" ,
       },
       
     ],
     'Master Bedroom': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Master Bedroom Design',
         url:"/in/home-interior/master-bedroom/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Master Bedroom Design',
         url:"/in/home-interior/master-bedroom/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Master Bedroom Design',
         url:"/in/home-interior/master-bedroom/1" ,
       },
       
     ],
     'Kids Room': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Kids Room Design',
         url:"/in/home-interior/kids-room/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Kids Room Design',
         url:"/in/home-interior/kids-room/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Kids Room Design',
         url:"/in/home-interior/kids-room/1" ,
       },
       
     ],
     'Kitchen Walls Tiles': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Kitchen Walls Tiles Design',
         url:"/in/home-interior/kitchen-walls-tiles/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Kitchen Walls Tiles Design',
         url:"/in/home-interior/kitchen-walls-tiles/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Kitchen Walls Tiles Design',
         url:"/in/home-interior/kitchen-walls-tiles/1" ,
       },
       
     ],
     'Kitchen False Ceiling': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Kitchen False Ceiling Design',
         url:"/in/home-interior/kitchen-false-ceiling/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Kitchen False Ceiling Design',
         url:"/in/home-interior/kitchen-false-ceiling/1" ,
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Kitchen False Ceiling Design',
         url:"/in/home-interior/kitchen-false-ceiling/1" ,
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

export default HomeCategory
