import React,{Component} from 'react'
class EventBing extends Component {
constructor(props) {
  super(props)

  this.state = {
     message:'hello'
  }
}
/*clickHandler() {
    this.setState({
        message:'Goodbye'
    })
    console.log(this);
} */
clickHandler = () => {
    this.setState({
        message:'Goodbye'
    })
}
render() {
  return (
    <div>
      <div>{this.state.message}</div>
      <button onClick={this.clickHandler}>Click Me</button>
    </div>
  );
}
}
export default EventBing;