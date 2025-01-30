'use client'
import './App.css'

import ImageGallery from './components/ImageGallery'
import { useState } from 'react'
import ImageGalleryPopup from './components/ImageGalleryPopup';
import PropertyInfo from './components/PropertyInfo';
import ProjectTabHome from './components/ProjectTabHome';
// import { useNavigate } from 'react-router-dom';


function App() {
 const [isPopup , setIsPopup] =useState(false);
//  const navigate = useNavigate();
//  const userName = JSON.parse(localStorage.getItem('user'));
//  const onClick = () => {
//   if(!userName){
//     navigate('/login');
//   }
//  }
  return (
    // onClick={onClick}
   <div >
 
   
   {isPopup?<ImageGalleryPopup close={()=>{
    setIsPopup(false);
   }}/>:
   <>
   
   <div className='homePageMainDiv'>
   <ImageGallery onClickImage={()=>{
     setIsPopup(true);
   
   
   }}/>
   <PropertyInfo/>
   <ProjectTabHome/>
   </div>
   
   </>}

   </div>
  )
}

export default App
