import React, { useState } from 'react'

const Child = ({setState}) => {

    const [childstate,setchildState] = useState("Dhanish")

    const handleSubmit=()=>{
      setState(childstate)
    }
  return (
    <div>
        <button onClick={handleSubmit}>Data from child...!</button>
    </div>
  )
}

export default Child