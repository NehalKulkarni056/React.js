import React from 'react'

const App = () => {

  let handleSubmit=(e)=>{
    e.preventDefault();
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value
    console.log({user, pass});
    }

  return (
    <div>
      <form action="">
        <label htmlFor="username">User Name : </label> <br />
        <input type="text" id='username' /> <br />
        <label htmlFor="password">Password</label> <br />
        <input type="password" id='password' /> <br />
        <button onClick={handleSubmit}>Submit</button>
          </form>
    </div>
  )
}

export default App