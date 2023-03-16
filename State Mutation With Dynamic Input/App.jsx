import React, { Component, createElement } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
                  userName : "Nehal",
                  password :  580580
    }
  }

  handleNameChange=()=>{
              let inp=document.createElement("input")
              inp.style.width="250px"
              inp.placeholder="Enter new User name"
              let root=document.getElementById("app")
              root.appendChild(inp)
              inp.id="name"
              inp.addEventListener("keypress",()=>{
                let n=document.getElementById("name").value
                this.setState({userName:n})
              })
  }

  handlePasswordChange=()=>{
        let inp=document.createElement("input")
        inp.style.width="250px"
        inp.placeholder="Enter new Password"
        let root=document.getElementById("app")
        root.appendChild(inp)
        inp.id="pwd"
        inp.addEventListener("keypress",()=>{
        let p=document.getElementById("pwd").value
        this.setState({userName:p})
    })
  }

  render() {
    return (
      <div id='app'>
       <h1> User Name : {this.state.userName} </h1>
       <h2> Password : {this.state.password} </h2>
       <button onClick={this.handleNameChange}>Change User Name</button>
       <button onClick={this.handlePasswordChange}>Change Password</button>
       <br />
       <br />
      </div>
    );
  }
}

export default App;
