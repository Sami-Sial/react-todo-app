import React, { useEffect } from 'react';
import { useState } from "react";
import "../stylesheets/main.css";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import StarIcon from '@mui/icons-material/Star';

import { useSelector, useDispatch } from 'react-redux';
import { addNewTask, deleteOneTodo, deleteAllTodos, markAsDoneAll, markAsDoneOne } from "../redux-toolkit/todo.slice";


const Main = () => {
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  let [newTodo, setNewTodo] = useState("");
  const [priority, setPriority] = useState("high_priority_task");

  // getting all todos from state(redux toolkit state)
  const { todos } = useSelector((state) => state.todos);

  // filtering todos on priority basis stored in Local storage
  const highPriorityTodos = todos.filter((todo) => {
    return todo.priority == "high_priority_task" && todo.isDone == false;
  })
  const mediumPriorityTodos = todos.filter((todo) => {
    return todo.priority == "medium_priority_task" && todo.isDone == false;
  })
  const lowPriorityTodos = todos.filter((todo) => {
    return todo.priority == "low_priority_task" && todo.isDone == false;
  })

  // filtering completed tasks
  const completedTasks = todos.filter((todo) => {
    return todo.isDone == true;
  })
  
  // Add Task Handler
  const addTask = (e) => {
    setNewTodo({ ...newTodo, task: task, isDone: false, id: uuidv4(), priority: priority }); 
    setTask("");
    toast.success("New Task Added.")
  }

  useEffect(() => {
    if (newTodo) {
      dispatch(addNewTask(newTodo));  
    }  
  }, [newTodo])


  return (
    <>
      <main>

        {/* Input Tasks */}
        <div id="input-task-wrapper">
          <div id="input-task">
          
            <div>
              <label style={{ fontSize: "18px", marginRight: "15px" }} htmlFor="task">Enter Task</label>
              <br />
              <input id='task' value={task} onChange={(e) => setTask(e.target.value)} type="text" placeholder="Write task to add" />
            </div>

            <div>
              <label style={{ fontSize: "18px", marginRight: "15px" }} htmlFor="priority">Task Priority</label>
              <br />
              <select onChange={(e) => setPriority(e.target.value)} name="priority" id="priority">
                <option value="high_priority_task">High priority task</option>
                <option value="medium_priority_task">Medium priority task</option>
                <option value="low_priority_task">Low priority task</option>
              </select>
              <button style={{marginLeft: "20px"}} onClick={addTask}>Add Task</button>

            </div>
            
          </div> 
       </div>
        
        {/* No Added tasks message */}
        <div id="all-todos">
          {todos.length<=0 && 
             <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem 0"}}>
              <p>No Tasks added yet.</p>
              <p>Added Tasks will appear here</p>
              <p>You can add priority of tasks and tasks will appear here priority wise</p>
            </div>
          }

          {/* High Priority Tasks */}
          {
            Array.isArray(highPriorityTodos) && highPriorityTodos.length >= 1 &&
              <div>
                <h4 style={{color: "#347136", margin: "20px"}}>High Priority Todos:-</h4>
                  {highPriorityTodos.map((todo) =>
                    <div className="todo" key={todo.id}>

                      <div className='todo-left' onClick={() => dispatch(markAsDoneOne(todo.id))}>
                        <div className='rectangle'>
                          <span style={todo.isDone ? { display: "inline" } : { display: "none" }}><DoneIcon /></span>
                        </div>
                        <span style={todo.isDone ? { textDecoration: "2px solid green line-through" } : {}}><b>{todo.task}</b></span>
                        <p>{todo.isDone}</p>
                      </div>

                      <div className='todo-right'>
                        <StarIcon/>
                        <DeleteIcon onClick={() => dispatch(deleteOneTodo(todo.id))} style={{ cursor: "pointer" }} />
                      </div>
                    </div>
                )}
             </div>
          }

          {/* Medium Priority Tasks */}
          {
            Array.isArray(mediumPriorityTodos) && mediumPriorityTodos.length >= 1 &&
              <div>
                <h4 style={{color: "#347136", margin: "20px"}}>Medium Priority Todos:-</h4>
                  {mediumPriorityTodos.map((todo) =>
                    <div className="todo" key={todo.id}>

                      <div className='todo-left' onClick={() => dispatch(markAsDoneOne(todo.id)) }>
                        <div className='rectangle'>
                          <span style={todo.isDone ? { display: "inline" } : { display: "none" }}><DoneIcon /></span>
                        </div>
                        <span style={todo.isDone ? { textDecoration: "2px solid green line-through" } : {}}><b>{todo.task}</b></span>
                        <p>{todo.isDone}</p>
                      </div>

                      <div className='todo-right'>
                        <DeleteIcon onClick={() => dispatch(deleteOneTodo(todo.id))} style={{ cursor: "pointer" }} />
                      </div>
                    </div>
                )}
             </div>
          }

          {/* Low Priority Tasks */}
          {
            Array.isArray(lowPriorityTodos) && lowPriorityTodos.length >= 1 &&
              <div>
                <h4 style={{ margin: "20px", color: "#347136"}}>Low Priority Todos:-</h4>
                  {lowPriorityTodos.map((todo) =>
                    <div className="todo" key={todo.id}>

                      <div className='todo-left' onClick={() => dispatch(markAsDoneOne(todo.id)) }>
                        <div className='rectangle'>
                          <span style={todo.isDone ? { display: "inline" } : { display: "none" }}><DoneIcon /></span>
                        </div>
                        <span style={todo.isDone ? { textDecoration: "2px solid green line-through" } : {}}><b>{todo.task}</b></span>
                        <p>{todo.isDone}</p>
                      </div>

                      <div className='todo-right'>
                        <DeleteIcon onClick={() => dispatch(deleteOneTodo(todo.id))} style={{ cursor: "pointer" }} />
                      </div>
                    </div>
                )}
             </div>
          }

            {/* Mark as Done & Delete All tasks Btns */}
                {todos && todos.length > 1 &&
                  <div>
                    <button id='delete-all-btn' onClick={() => dispatch(deleteAllTodos())}>Delete All</button>
                    <button onClick={() => dispatch(markAsDoneAll())}>Mark as Done All</button>
                  </div>
            } 

        {/* Completed Tasks */}
           {
            Array.isArray(completedTasks) && completedTasks.length >= 1 &&
              <div>
                <h4 style={{margin: "20px", color: "#347136"}}>Completed Tasks:-</h4>
                  {completedTasks.map((todo) =>
                    <div className="todo" key={todo.id}>

                      <div className='todo-left'>
                        <div className='rectangle'>
                          <span style={{ display: "inline" }}><DoneIcon /></span>
                        </div>
                        <span style={ { textDecoration: "2px solid green line-through" }}><b>{todo.task}</b></span>
                        <p>{todo.isDone}</p>
                      </div>

                      <div className='todo-right'>
                        <DeleteIcon onClick={() => dispatch(deleteOneTodo(todo.id))} style={{ cursor: "pointer" }} />
                      </div>
                    </div>
                )}

             </div>
          }
        </div> 
 
      </main>
    </>
  )
}

export default Main
