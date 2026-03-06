import React, { useState } from 'react'

const Todo = () => {
    const[task,setTask]=useState('');
    const[todos,setTodos]=useState([{
        task:'Read',
        status:false     // if we place true instead of false in console read will strike out  
    }])
    const [edit,setEdit]=useState(null);         
    //  instead of null if we place the condition it will change add to update
    const handleAddOrEdit=(e)=>{
        e.preventDefault();
        if(edit||edit==0){
            setTodos(todos.map((todo,index)=>(
                index===edit?{...todo,task:task}:todo
            )))
            setEdit(null);

        }
        else{
            setTodos([...todos,{
                task:task,
                status:false
            }]);
        }
        setTask('');

    };
    const handleDelete=(index)=>{
        setTodos(todos.filter((_,i)=>index!=i))
    };
    const handleToggleStatus=(index)=>{
        setTodos(todos.map((todo,i)=>(
            index===i?{...todo,status:!todo.status} : todo

        )))
    };
  return (
    <div>
        <h1>Todo</h1>
        <input type='text' 
        placeholder='Enter the task'
        value={task}
        onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleAddOrEdit}>{edit||edit==0?"Update":"Add"}</button>
        <br /><br />
        <ul>
            {todos.map((todo,index)=>(
                <li key={index}>
                 <span style={
                    {cursor:"pointer",
                    textDecoration:todo.status?"line-through":"none"}
                 }
                 onClick={()=>handleToggleStatus(index)}
                 >{todo.task}</span>
                 <button onClick={()=>{
                    setTask(todo.task);
                    setEdit(index);

                 }}>✏️</button>
                 <button onClick={()=>handleDelete(index)}>🗑️</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Todo