import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
                  userName : "Nehal",
                  password :  580580
    }
  }

  handleNameChange=()=>{
                  this.setState({userName:"Coolkarni"})
  }

  handlePasswordChange=()=>{
                  this.setState({password:123123})
  }

  render() {
    return (
      <div>
       <h1> User Name : {this.state.userName} </h1>
       <h2> Password : {this.state.password} </h2>
       <button onClick={this.handleNameChange}>Change User Name</button>
       <button onClick={this.handlePasswordChange}>Change Password</button>
      </div>
    );
  }
}

export default App;
