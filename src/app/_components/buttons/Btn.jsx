'use client'
import React from 'react'
import { useRouter } from "next/navigation";
import './Btn.css'
const Btn = ({children , onClick}) => {
    const router = useRouter()
  return (
    <div className="cardBtnAction-without-hover btnwidth" onClick={()=>router.push(onClick)}>
     {children} 
    </div>
  )
}

export default Btn
