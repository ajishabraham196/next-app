'use client'
import React, { useState } from 'react'

export default function ClientPage() {

    const[count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button className='btn btn-secondary' type='button' onClick={()=> setCount(count+1)} >Incremnt</button>
    </div>
  )
}
