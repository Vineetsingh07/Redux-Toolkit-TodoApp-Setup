import { nanoid } from "@reduxjs/toolkit";

const addTodoMethod = (state, action) => {
  const todo = {
    id: nanoid(),
    text: action.payload,
    completed: false,
  };
  state.todos.push(todo);
};

const toggleCompleteMethod = (state, action) => {
  state.todos = state.todos.map((todo) =>
    todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
  );
};

const editTodoMethod = (state, action) => {
    console.log("action",action)
  const { id, text } = action.payload;

  state.todos = state.todos.map((todo) =>
    todo.id === id ? { ...todo, text: text } : todo
  );
};

const removeTodoMethod = (state, action) => {
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
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
