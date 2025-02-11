import React from 'react'
import User from './User'
import { Suspense } from 'react';
const page = () => {
  return (
    <div>
       <Suspense fallback={<div>Loading sidebar...</div>}>
       <User/>
       </Suspense>
    </div>
  )
}

export default page
