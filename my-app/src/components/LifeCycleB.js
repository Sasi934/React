import React, { Component } from 'react'

 class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            name:'sasi'
      }
      console.log('LifecycleB constructor')
    }  
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
      console.log('LifecycleB componentDidMount')
    }
     shouldComponentUpdate(){
      console.log("LifeCycleB shouldComponentUpdate")
      return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("LifeCycleB getSbapshotBeforeUpadate")
      return null
    }
    componentDidUpdate(){
      console.log("LifeCycleB componentDidUpdate")
      return null
    }
  render() {
    console.log('LifecycleB render')
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB