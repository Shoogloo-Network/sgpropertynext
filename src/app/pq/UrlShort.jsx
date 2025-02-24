"use client"
import React, { useState } from 'react'

const UrlShort = () => {
    const [url,setUrl]=useState("");
    const [list,setList]=useState("");
    const [listArray,setListArray]=useState(['Your List here']);
    const handleclick = ()=>{
console.log("Clicked",url);
    }

    const handleListClick = ()=>{
        console.log('list',list);
        setListArray((prev)=>[...prev,list]);
    }

            const handleBtnClick = (itemIndex)=>{
                console.log(itemIndex)
             const filteredArray =   listArray.filter((item,index)=>itemIndex!==index);
             console.log(filteredArray);
             setListArray(filteredArray);
            }
  return (
    <div>
      <h1>Url Short</h1>
      <input type="text" value={url} placeholder="Enter Your Url" onChange={(e)=>setUrl(e.target.value)}/>
      <button onClick={handleclick}>Generate Url</button>
      <input type="text" value={list} placeholder="Enter Your Url" onChange={(e)=>setList(e.target.value)}/>
      <button onClick={handleListClick}>Generate Url</button>
      {
        listArray.map((item,index)=>{
           return (<div key={index}><p>{item}</p><button onClick={()=>handleBtnClick(index)}>Delete{index}</button></div>)
        })
      }
    </div>
  );
}

export default UrlShort
