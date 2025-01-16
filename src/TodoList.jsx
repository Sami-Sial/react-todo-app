import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function TodoList() {
   let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);
   let [newTodo, setNewTodo] = useState("");

   const addNewTask = () => {
      setTodos((prevTodos) => {
         return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]
      });
      setNewTodo("");
   }

   const updateTodoValue = (event) => {
      setNewTodo(event.target.value);
   }

   const deleteTask = (id) => {
      setTodos((prevTodos) => { return prevTodos.filter((todo) => todo.id != id) });
   }

   const markAsDoneAll = () => {
      setTodos((prevTodos) => {
         return prevTodos.map((todo) => {
            return {
               ...todo,
               isDone: true,
            }
         })
      }
      )
   }

   const markAsDoneOne = (id) => {
      setTodos((prevTodos) => {
         return prevTodos.map((todo) => {
            if (todo.id === id) {
               return {
                  ...todo,
                  isDone: true,
               }
            } else {
               return todo;
            }
         })
      }
      )
   }

   return (
      <div id="todo-app">
         <TextField value={newTodo} onChange={updateTodoValue}  id="outlined-basic" label="Enter task" variant="outlined" />
         <br /><br />
         <Button  onClick={addNewTask} variant="contained">Add</Button>
         <br /><br />
         <hr />
         <h2>List of Todos</h2>
         <ul>
            {
               todos.map((todo) => {
                  return (
                     <li key={todo.id}>
                        <span style={todo.isDone ? {textDecoration: "line-through"} : {}}><b>{todo.task}</b></span>
                        <Button style={{margin: "0 10px 0 50px"}} onClick={() => { deleteTask(todo.id) }} variant="contained" size="small">Delte</Button>
                        <Button onClick={() => { markAsDoneOne(todo.id) }} variant="contained" size="small">Mark as Done</Button>
                     </li>
                  )
               })
            }
         </ul>
         <Button onClick={markAsDoneAll} variant="contained" size="small">Mark as Done All</Button>
      </div>
   )
}

export default TodoList;