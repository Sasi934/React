import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {

        isloggedIn:true
           
      }
    function myname()
    {
        return <div>"IVS"</div>
    }
    function guestname()
    {
        return <div>"sasi"</div>
    }
    }
  render() {
    return this.state.isloggedIn && "shashank"
    //return this.state.isloggedIn ? "we are happy to see you " : "sorry you not at the right statement"
   {/*} let message
    if(this.state.isloggedIn)
    {
        message = <div>"We are happy to see you"</div>
    }
    else{
        message =<div>"Sorry you are at the else statement"</div>
    }
    return <div>{message}</div>*/}
  }
}

export default UserGreeting