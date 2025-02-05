'use client'
import React, { useState } from 'react'

const CharCounter = () => {
   
    const [text,setText]=useState('');
    const [count,setCount]=useState([]);
    const calculateNoOfLines = (text)=>{
        const line = text.split(/\r*\n/);
        console.log(line)
        setCount(line);
    }
    
    const totalCharacter = (text)=>{
const charCount = text.split("");
console.log(charCount.length);
    }
    const wordCount = (text)=>{
        const wordCount = text.split(" ");
        console.log(wordCount.length);
            }
  const letterCount = (text)=>{
                const letterCount = text.split("");
                const frequency ={};
                for(const val of letterCount){
                    frequency[val]=(frequency[val]||0)+1;
                }

                console.log(letterCount);
                console.log(Object.entries(frequency));

                    }
  return (
    <div>
    <textarea value={text} onChange={(e)=>{setText(e.target.value)}} />
<button onClick={()=>calculateNoOfLines(text)}>Click</button>
<button onClick={()=> totalCharacter(text)}>Total Character</button>
<button onClick={()=> wordCount(text)}>Total Word</button>
<button onClick={()=> letterCount(text)}>Letter Density</button>


  <p>{text}</p>
  <p>{count.length}</p>
    </div>
  )
}

export default CharCounter
