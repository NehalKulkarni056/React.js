import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state={
      username : ""
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <input type="text" onChange={(e)=>{
          this.setState({username : e.target.value})
        }} />
      </div>
    );
  }
}

export default App;
