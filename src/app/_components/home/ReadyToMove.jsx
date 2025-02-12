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
       url:"/in/ready-to-move/projects-in-mumbai/1",
     },
     {
      imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
       url:"/in/ready-to-move/projects-in-noida/2",
     },
     {
      imgSrc: 'buildinghome.jfif',
       title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
       url:"/in/ready-to-move/projects-in-delhi/3",
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
         url:"/in/ready-to-move/projects-in-delhi/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
         url:"/in/ready-to-move/projects-in-delhi/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Luxury Contemporary Delhi Design With L Shaped Sofa',
         url:"/in/ready-to-move/projects-in-delhi/3",
       },
      
     ],
     'Gurgaon': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Gurgaon Design',
         url:"/in/ready-to-move/projects-in-gurgaon/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Gurgaon Design',
         url:"/in/ready-to-move/projects-in-gurgaon/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Gurgaon Design',
         url:"/in/ready-to-move/projects-in-gurgaon/3",
       },
       
     ],
     'Noida': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Noida Design',
         url:"/in/ready-to-move/projects-in-noida/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Noida Design',
         url:"/in/ready-to-move/projects-in-noida/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Spacious Noida Design',
         url:"/in/ready-to-move/projects-in-noida/3",
       },
       
     ],
     'Uttar Pardesh': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Uttar Pardesh Design',
         url:"/in/ready-to-move/projects-in-noida/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Uttar Pardesh Design',
         url:"/in/ready-to-move/projects-in-noida/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Elegant Uttar Pardesh Design',
         url:"/in/ready-to-move/projects-in-noida/3",
       },
       
     ],
     'Haryana': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Haryana Design',
         url:"/in/ready-to-move/projects-in-noida/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Haryana Design',
         url:"/in/ready-to-move/projects-in-noida/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Fun and Colorful Haryana Design',
         url:"/in/ready-to-move/projects-in-noida/3",
       },
       
     ],
     'Gujrat': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Gujrat Design',
         url:"/in/ready-to-move/projects-in-gujrat/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Gujrat Design',
         url:"/in/ready-to-move/projects-in-gujrat/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Stylish Gujrat Design',
         url:"/in/ready-to-move/projects-in-gujrat/3",
       },
       
     ],
     'Mumbai': [
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Mumbai Design',
         url:"/in/ready-to-move/projects-in-mumbai/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Mumbai Design',
         url:"/in/ready-to-move/projects-in-mumbai/3",
       },
       {
        imgSrc: 'buildinghome.jfif',
         title: 'Modern Mumbai Design',
         url:"/in/ready-to-move/projects-in-mumbai/3",
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
