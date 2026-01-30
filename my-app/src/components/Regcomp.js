import React, { Component,PureComponent } from 'react'

 class Regcomp extends PureComponent {
  render() {
    console.log("Regular component")
    return (
      <div>Reg component {this.props.name}</div>
    )
  }
}

export default Regcomp