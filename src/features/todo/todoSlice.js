import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  addTodoMethod,
  clearCurrentTodoMethod,
  editTodoMethod,
  removeTodoMethod,
  setCurrentTodoMethod,
  toggleCompleteMethod,
  removeAllTodosMethod,
} from "./todoSliceMethods";
import { getDataFromLocalStorage } from "../../localStorage/localStorage";

const initialState = {
  todos: getDataFromLocalStorage("todos") || [
    { id: nanoid(), text: "Hello World", completed: false },
  ],
  currentTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodoMethod,
    toggleComplete: toggleCompleteMethod,
    removeTodo: removeTodoMethod,
    editTodo: editTodoMethod,
    setCurrentTodo: setCurrentTodoMethod,
    clearCurrentTodo: clearCurrentTodoMethod,
    removeAllTodos: removeAllTodosMethod,
  },
});

export const {
  addTodo,
  removeTodo,
  toggleComplete,
  editTodo,
  setCurrentTodo,
  clearCurrentTodo,
  removeAllTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
