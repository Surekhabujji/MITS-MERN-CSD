import React from 'react'

const Child = ({name,age,isActive})=> {
  return (
    <div>
        <h1>Name : {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Active Status: {isActive ? "Active" : "Not Active"}</h1>
    </div>
  )
}

export default Child