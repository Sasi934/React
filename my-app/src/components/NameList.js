import React from 'react'
import Person from './Person'

function NameList() {
    const person = [
        {
            id : 1,
            name : 'shashank',
            age : 20,
            skill : 'java'
        },
        {
            id : 2,
            name : 'reddy',
            age : 22,
            skill : 'python'    
        }, 
        { 
            id : 3,
            name : 'sasi',
            age : 20,
            skill : 'java'
        }
        
    ]
    const personlist = person.map((person, index) => (<Person key={index} person={person} index = {index}/>))
    return <div>{personlist}</div>
   {/*} const names =['I.V','Shashank','Reddy']
    const namelist = names.map(names => <h2>{names}</h2>)
    return <div>{namelist}</div>*/}
  {/*return (
    <div>
        {
        names.map(names => <h2>{names}</h2> )
}
    </div>
  )*/} 
}

export default NameList