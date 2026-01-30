import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

 class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name:'sasi'
      }
      console.log('Lifecycle constructor')
    }  
    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle getDerivedStateFromProps')
        return null
    }
     componentDidMount(){
      console.log('LifecycleA componentDidMount')
    }
     shouldComponentUpdate(){
      console.log("LifeCycleA shouldComponentUpdate")
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("LifeCycleA getSbapshotBeforeUpadate")
      
    }
    componentDidUpdate(){
      console.log("LifeCycleA componentDidUpdate")
      return null
    }
    chnageState=()=>{
      this.setState({
        name:'shashank'
      })
    }
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <div>LifeCycleA</div>
        <button onClick={this.chnageState}>Change State</button>
        <LifeCycleB/>
      </div>
    )
  }
}

export default LifeCycle