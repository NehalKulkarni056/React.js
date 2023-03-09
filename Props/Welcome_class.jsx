import React, { Component } from 'react'

export default class Welcome_class extends Component {
  render() {
    return (
      <>
      <br />
      <div className="pic">
        <img src={this.props.pic} alt="logo" />
        </div>
      </>
    )
  }
}

