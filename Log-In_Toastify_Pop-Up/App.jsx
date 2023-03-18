import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import STYLE from "./Log-In_Toastify_Pop-Up/global.css"

const App = () => {

  let handleSubmit=()=>{
    toast.success('Logged in successfully...!', {
      position: "top-center",
    });
  }

  return (
    <>
        <ToastContainer/>
        <center>
        <div className='mainBlock'>
            <label htmlFor="username">User Name : </label>
            <input type="text" name="username" id="username" className='inp' /> <br /> 
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" className='inp' /> <br />
            <div className='btngrp'>
              <button type="submit" className='btn' onClick={handleSubmit}>Log In</button>
              <button type="reset" className='btn'>Reset</button>
            </div>
          </div>
          </center>
        </>
  )
}

export default App