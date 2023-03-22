import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
      <form action="">
        <label htmlFor="username">User Name : </label> <br />
        <input type="text" id='username' /> <br />
        <label htmlFor="password">Password</label> <br />
        <input type="password" id='password' /> <br />
        <button onClick={(e)=>{
          e.preventDefault();
          let user = document.getElementById("username").value
          let pass = document.getElementById("password").value
          console.log({user, pass});
          }}>Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
