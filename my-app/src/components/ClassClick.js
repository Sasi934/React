import React, { Component } from 'react'

class ClassClick extends Component {
    Handler(){
        console.log("Clicked the Button")
    }
  render() {
    return (
      <div>
        <button onClick={this.Handler}>Click Me</button>
      </div>
    )
  }
}
 
export default ClassClick