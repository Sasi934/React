import React from 'react'

function Column() {
  const items=[
    {id:1,title:"React Basics"},
    {id:2,title:"React with Redux"},
    {id:3,title:"React Hooks"}
  ]
  return (
    <React.Fragment>
      {
        items.map(item=>(
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
          </React.Fragment>
        ))
      }
        <td>Name</td>
        <td>Sasi</td>
    </React.Fragment>
  )
}

export default Column