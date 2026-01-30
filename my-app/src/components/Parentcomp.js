import React, { Component,PureComponent } from 'react'
import Regcomp from './Regcomp'
import Purecomp from './Purecomp'
import Memocomp from './Memocomp'

 class Parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sasi"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'sasi'
            })
        },2000)
    }
  render() {
    console.log("**********Parent component render**********")
    return (
      <div>Parent component
        <Memocomp name={this.state.name}/>
        {/* <Regcomp name={this.state.name}/>
        <Purecomp name={this.state.name}/> */}
      </div>
    )
  }
}

export default Parentcomp