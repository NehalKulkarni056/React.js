import React, { Component, createRef } from 'react';

class App extends Component {

  constructor(){
    super()
    this.userRef = createRef()
    this.passRef = createRef()
  }

  handleSubmit = (e)=>{
        e.preventDefault()
        let user = this.userRef.current.value
        let pass = this.passRef.current.value
        console.log({user,pass});
  }
  render() {
    return (
      <div>
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="username">User Name : </label> <br />
        <input type="text" id='username' ref={this.userRef}/> <br />
        <label htmlFor="password">Password</label> <br />
        <input type="password" id='password'  ref={this.passRef}/> <br />
        <button type='Submit'>Submit</button>
      </form>
      </div>
    );
  }
}

export default App;
