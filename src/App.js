import React, {useReducer, useState} from 'react';
import './App.css';
import Todo from './todo';

const reducer = (state,action) => {
  switch(action.type){
    case 'add-todo':
      const name  = action.payload.name;
      const newTodo = {
        id:Date.now(),
        name,
        isHere:false,
      }
      return{
        count:state.count + 1,
        todolist: [...state.todolist, newTodo],
      }
      case 'delete-todo':
        return{
          count: state.count -1,
          todolist: state.todolist.filter(
            (todolist) => todolist.id !== action.payload.id),
        }
      case'mark-todolist':
      return{
        count:state.count,
        todolist: state.todolist.map((todolist) => {
          if(todolist.id === action.payload.id){
            return{...todolist,isHere: !todolist.isHere}
          }
          return todolist;
        })
      }
      default:
        return state; 
    }


};

const initialState = {
  count: 0,
  todolist:[],
}

function App() {

  const [name, setName] = useState('')
  const [ todo,setodo] = useReducer(reducer,initialState)
  return (
    <div className='div'>
      <h1 className='h1'>오늘의 할일 </h1>
      <p className='todo p'>할일 갯수 : {todo.count}</p>
      
      <input
      type='text'
      placeholder='할일을 입력해주세요'
      value={name}
      onChange={(e)=>setName(e.target.value)}
      className='input'>
      </input>
      <button onClick={() => {
        setodo({type: 'add-todo', payload :{name}})
      }} >추가</button>
      
      
      {todo.todolist.map((todolist) => {
        return<Todo
        key={todolist.id} 
        name={todolist.name} 
        setodo={setodo} 
        id={todolist.id}
        isHere={todolist.isHere}/>
      })}
   
      
    </div>
  );
}

export default App;
