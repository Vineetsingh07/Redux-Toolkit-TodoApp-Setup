import { nanoid } from "@reduxjs/toolkit";
import { setDataInLocalStorage } from "../../localStorage/localStorage";

const addTodoMethod = (state, action) => {
  const todo = {
    id: nanoid(),
    text: action.payload,
    completed: false,
  };
  state.todos.push(todo);
  setDataInLocalStorage("todos", state.todos);
};

const toggleCompleteMethod = (state, action) => {
  state.todos = state.todos.map((todo) =>
    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
  );
  setDataInLocalStorage("todos", state.todos);
};

const editTodoMethod = (state, action) => {
  console.log("action", action);
  const { id, text } = action.payload;

  state.todos = state.todos.map((todo) =>
    todo.id === id ? { ...todo, text: text } : todo
  );
  setDataInLocalStorage("todos", state.todos);
};

const removeTodoMethod = (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  setDataInLocalStorage("todos", state.todos);
};

const setCurrentTodoMethod = (state, action) => {
  state.currentTodo = action.payload;
};

const clearCurrentTodoMethod = (state, action) => {
  state.currentTodo = null;
};

export {
  addTodoMethod,
  toggleCompleteMethod,
  editTodoMethod,
  removeTodoMethod,
  setCurrentTodoMethod,
  clearCurrentTodoMethod,
};
