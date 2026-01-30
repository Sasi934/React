import React from "react";

/*function Greetprops(props) {
    return (
        <div>
            <h1>Hello {props.name} </h1>
        </div>
    )
}*/
const Greetprops = (props) => 
{
return (
<div>
<h1>{props.name} - I am {props.profession} and also {props.status}</h1>   
{props.children}
</div>
)}
export default Greetprops;