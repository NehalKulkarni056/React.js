import React, {useState, useRef} from 'react'
import IMG from "./Changing_attributes_Of_a_Image/Pic.jpg"

const App = () => {

    let [img,setImg] =  useState(IMG);

    let imgRef = useRef();

    let btnRef = useRef();

    let [change,setChange] = useState(true)

    let handleChange=()=>{
        if (change==true){
            setChange(false)  //which means false...!
            imgRef.current.style.border="2px solid black"
            imgRef.current.style.borderRadius="25%"
            btnRef.current.style.backgroundColor="green"
            btnRef.current.style.borderRadius="25px"
    }
    else{
        setChange(true)
        imgRef.current.style.border="none"
        imgRef.current.style.borderRadius="0"
        btnRef.current.style.backgroundColor="inherit"
        btnRef.current.style.borderRadius="0"
    }
}

  return (
    <div>
        <center>
        <img src={img} alt=""  height="500px" width="600px" ref={imgRef}/> <br /> <br />
        <button ref={btnRef} onClick={handleChange}>Change Attributes</button>
        </center>
    </div>
  )
}

export default App