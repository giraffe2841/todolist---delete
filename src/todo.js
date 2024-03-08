import React from "react";

const Todo = ({name,setodo,id,isHere}) =>{
    return(
        <div>
            <span style={{
                textDecoration: isHere ? 'line-through' : 'none',
                color: isHere ? 'gray' : 'black',
            }}
            onClick={()=>{
                setodo({type: "mark-todolist",payload: { id } });
            }}
            >
            {name}</span>
            <button onClick={()=>{
                setodo({type:'delete-todo',payload:{id}})
            }}>삭제</button>
        </div>
    )
}

export default Todo