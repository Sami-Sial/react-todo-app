import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
      todos: localStorage.getItem("todos") ?
        JSON.parse(localStorage.getItem("todos")): [],
    },
    reducers: {
      addNewTask: (state, action) => {
        state.todos.push(action.payload);
        localStorage.setItem("todos", JSON.stringify(state.todos));   
      },
      
      deleteOneTodo: (state, action) => {
        let id = action.payload;
        
        state.todos = state.todos.filter((todo) => todo.id != id);
        localStorage.setItem("todos", JSON.stringify(state.todos)); 
      },

      deleteAllTodos: (state) => {
        state.todos = [],
          localStorage.setItem("todos", JSON.stringify(state.todos));
      },
        
      markAsDoneAll: (state, action) => { 
        state.todos = state.todos.map((todo) => {
          return { ...todo, isDone: true };
        })
        localStorage.setItem("todos", JSON.stringify(state.todos));
      },
        
      markAsDoneOne: (state, action) => {
        let id = action.payload;

        state.todos = state.todos.map((todo) => { 
          if (todo.id == id) {
            return { ...todo, isDone: true };
          } else {
            return todo;
          }
        });

        localStorage.setItem("todos", JSON.stringify(state.todos)); 
      },
    }
    
});

export const {addNewTask, deleteOneTodo, deleteAllTodos, updateTodoValue, markAsDoneAll, markAsDoneOne} = todoSlice.actions

export default todoSlice.reducer;