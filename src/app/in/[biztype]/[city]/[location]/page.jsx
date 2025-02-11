import React from 'react'

const page = async ({params}) => {
    const para = await params
  return (
    <div>
      <h1>{para.location}</h1>
    </div>
  )
}

export default page
