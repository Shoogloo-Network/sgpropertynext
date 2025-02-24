"use client"
import React, {useState, useEffect } from 'react'
import './ProgressBar.css'
const ProgressBar = ({loading}) => {
 const [loadingPercentage , setLoadingPercentage] = useState(0);
 useEffect(()=>{
  setLoadingPercentage(loading);
 },[loading]);
  return (
    <div>
    <div className='outer'>
      <div className='inner' style={{transform:`translate(${loadingPercentage - 100}%)`}}>{loadingPercentage}%</div>
    </div>
    </div>
  )
}

export default ProgressBar
