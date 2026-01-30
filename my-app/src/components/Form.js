import React, { Component } from 'react'

 class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         rollnumber:'',
         comments:'',
         topics:''
      }
    }
    handlerUsernameChange= (event) =>{
        this.setState({
            username: event.target.value
        })
    }
    handlerRollnumber= (event) =>{
        this.setState({
            rollnumber: event.target.value
        })
    }
    handlerComments= (event) =>{
        this.setState({
            comments: event.target.value
        })
    }
    handlerTopics= (event) =>{
        this.setState({
            topics: event.target.value
        })
    }
    handlerSubmit= (event) =>{
        alert(`${this.state.username}  ${this.state.rollnumber} ${this.state.comments} ${this.state.topics} `)
        event.preventDefault()
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
            <div>
                <label>UserName</label>
                <input type='text' value={this.state.username} onChange={this.handlerUsernameChange}/>
            </div>
            <div>
                <label>Roll Number</label>
                <input type='text' value={this.state.rollnumber} onChange={this.handlerRollnumber}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handlerComments}/>
            </div>
            <div>
                <label>Topics</label>
                <select value={this.state.topics} onChange={this.handlerTopics}>
                    <option value='react'>React</option>
                    <option value='java'>Java</option>
                    <option value='node'>Node</option>
                </select>
            </div>
            <input type='submit' value='Submit'/>

        </form>



      </div>
    )
  }
}

export default Form