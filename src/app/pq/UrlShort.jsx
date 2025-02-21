"use client"
import React, { useState } from 'react'

const UrlShort = () => {
    const [url,setUrl]=useState("");
    const handleclick = ()=>{
console.log("Clicked",url);
    }
  return (
    <div>
      <h1>Url Short</h1>
      <input type="text" value={url} placeholder="Enter Your Url" onChange={(e)=>setUrl(e.target.value)}/>
      <button onClick={handleclick}>Generate Url</button>
    </div>
  );
}

export default UrlShort
