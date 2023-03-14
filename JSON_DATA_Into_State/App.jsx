import React, { Component } from 'react';
import JSON from "./JSON_DATA_Into_State/studentDetails.json"
import Students from './JSON_DATA_Into_State/Students.jsx';

class App extends Component {

  constructor(){
    super()
    this.state={
                  json : {JSON}
              }
  }
  render() {
    return (
      <>
      <Students data={this.state.json}/>
      </>
    )
  }
}

export default App;
