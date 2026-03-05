import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
    const[count,setCount]=useState(0);
    const like=useRef(0);
    const inputRef=useRef(null);
    //Example 1
    // useEffect(()=>{
    //     console.log("Component re-rendered")
    // })
    // const handleLike=()=>{
    //     like.current=like.current+1;
    // }
    //Example 2
    // useEffect(()=>{
    //     like.current=like.current+1;
    //     console.log("component Re-rendered")
    // })
    //example 3
    const handleClick=()=>{
        inputRef.current.focus();
        inputRef.current.style.color="blue";

    }
        

  return (
    <div>
        {/* Example 3 */}
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Focus</button>


        {/* Example 2
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <h1>Like : {like.current}</h1> */}
        {/* <button onClick={handleLike}>❤️</button> */}
    </div>
  )
}

export default Ref