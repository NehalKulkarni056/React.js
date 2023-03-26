import React, { Component } from 'react';
import LogIn from './Sign_Up_And_Login/Log_In';
import SignUp from './Sign_Up_And_Login/Sign_Up';
import STYLE from './Sign_Up_And_Login/global.css'

class App extends Component {
  constructor(){
    super()
    this.state = {
      showSignup : false,
      showLogin : true
    }
  }

  handleSignup(){
    this.setState({showSignup : true})
    this.setState({showLogin : false})
  }

  render() {
    return (
      <>
      <center>
      <div className='mainBlock'>
        { this.state.showLogin && ( <>
        <LogIn/>
          <div className='up'>
          <p>Don't have an account?</p>
          <button onClick={this.handleSignup.bind(this)}>SignUp</button>
          </div>
          </> )}
          {this.state.showSignup && <SignUp data={this.state}/>}
      </div>
      </center>
      </>
    );
  }
}

export default App;
