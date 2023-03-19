import React, { Component } from 'react';

class App extends Component {

  constructor(){
    super()
    this.state = {company : "Qspiders"}
    this.spanRef = React.createRef()
    this.btnRef = React.createRef()
  }
  render() {
    return (
      <div>
        <center>
        <span ref={this.spanRef}>{this.state.company}</span> <br /> <br />
        <button ref={this.btnRef} onClick={()=>{
          this.setState({company : "JSP"})
          this.spanRef.current.style.color="orange"
          this.spanRef.current.style.border="2px solid black"
          this.spanRef.current.style.padding="2px"
          this.spanRef.current.style.margin="20px"
          this.btnRef.current.style.backgroundColor="green"
        }}>Click to change</button>
        </center>
      </div>
    );
  }
}

export default App;
