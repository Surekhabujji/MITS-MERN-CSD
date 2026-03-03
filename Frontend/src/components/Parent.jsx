import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Surekha" age={20} isActive={true}/>
    </div>
  )
}

export default Parent