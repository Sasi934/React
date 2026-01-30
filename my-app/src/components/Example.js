import React, { Component } from 'react'

export class Example extends Component {
    constructor(props) {
    super(props)
     this.state = {
        message:'Namaste'
     }
  }

  changeexample = () => {
    this.setState({
      message:'How are you ?'
    })
  }

  render() {
    return (
      <div style={{textAlign:'center', marginTop:'50px'}}>
        <h1>{this.state.message}</h1>
        <button
          onClick={this.changeexample}
          style={{
            backgroundColor: 'lightgreen',
            color: 'white',
            padding: '10px',
            fontSize: '20px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: 'none', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
          }}
        >
          Click Me
        </button>
      </div>
    )
  }
}

export default Example;