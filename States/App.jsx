import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
                  course : "React.js",
                  skills : ["HTML","CSS","JS"]
              }
  }
  render() {
    return (
      <>
        <h1>Course : {this.state.course}</h1>
        <h2>Pre required skills : <br /> {this.state.skills.map((x)=>{
                                                                return <li>{x}</li>
                                                              } )
                                   }
        </h2>
      </>
    );
  }
}

export default App;
