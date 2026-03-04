import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div>
        <Child name="Surekha" age={20} isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:1234567890,
          email:"surekha45@gmail.com"

        }}/>
        <Child name="Charan" age={23} isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:1234567890,
          email:"charan45@gmail.com"

        }}/>


    </div>
  )
}

export default Parent