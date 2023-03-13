import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()
    this.state={
                  firstName : "Nehal",
                  lastName : "Coolkarni"
               }
  }
  render() {
    return (
      <>
      <h1>You Know Who....!?</h1>
      <h2>{this.state.firstName} {this.state.lastName}</h2>
      </>
    )
  }
}
