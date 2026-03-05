import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
        <button onClick={()=>message("Message from Parent")}>send message</button>
        <Child name="Surekha" age={20} isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:1234567890,
          email:"surekha45@gmail.com"

        }}
        sendMessage={message}
        />
        <Child name="Charan" age={23} isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:1234567890,
          email:"charan45@gmail.com"

        }}
        sendMessage={message}
        />


    </div>
  )
}

export default Parent