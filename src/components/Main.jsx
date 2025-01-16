import React, { useEffect, useRef } from 'react';
import { useState } from "react";
import "../styles/main.css";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';

import { useSelector, useDispatch } from 'react-redux';
import { addNewTask, deleteOneTodo, deleteAllTodos, markAsDoneAll, markAsDoneOne } from "../redux/todo.slice";


const Main = () => {
  const dispatch = useDispatch();
  let inputRef = useRef();

  const [task, setTask] = useState("");
  let [newTodo, setNewTodo] = useState("");

  const { todos } = useSelector((state) => state.todos);

  const addTask = (e) => {
    setNewTodo({ ...newTodo, task: task, isDone: false, id: uuidv4() }); 
    setTask("");
  }

  useEffect(() => {
    if (newTodo) {
      dispatch(addNewTask(newTodo));  
    }  
  }, [newTodo])

  const deleteOneTaskHandler = (id) => {
    dispatch(deleteOneTodo(id))
  }

  const deleteAllTasksHandler = (e) => {
    dispatch(deleteAllTodos());
  }

  const markAsDoneAllHandler = (e) => {
    dispatch(markAsDoneAll());
  }

  const markAsDoneOneHandler = (id) => {
    dispatch(markAsDoneOne(id));
  }


  return (
    <>
      <main style={{overflowY: "auto"}}>
         <div id="input-task">
            <input value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="Write task to add"/>
            <button onClick={addTask}>Add Task</button>
        </div> 
        
        <div id="all-todos">
          {Array.isArray(todos) && todos.length >= 1 ? todos.map((todo) =>
          
            <div className="todo" key={todo.id}>

              <div className='todo-left' onClick={() => { markAsDoneOneHandler(todo.id) }}>
                <div className='rectangle'>
                  <span style={todo.isDone ? { display: "inline" } : {display: "none"}}><DoneIcon/></span>
                </div>
                <span style={todo.isDone ? { textDecoration: "2px solid green line-through" } : {}}><b>{todo.task}</b></span>
                <p>{todo.isDone}</p>
              </div>

              <div className='todo-right'>
                <DeleteIcon onClick={() => deleteOneTaskHandler(todo.id)} style={{ cursor: "pointer" }} />
              </div>
            </div>
            
          ) : 
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "5rem"}}>
              <p>No Tasks added yet.</p>
              <p>Added Tasks will appear here</p>
            </div>
          }
          
          {todos && todos.length > 1 &&
            <div>
               <button id='delete-all-btn' onClick={deleteAllTasksHandler}>Delete All</button>
              <button onClick={markAsDoneAllHandler}>Mark as Done All</button>
            </div>
          }
        </div> 
 
      </main>
    </>
  )
}

export default Main
