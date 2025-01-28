import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  addTodoMethod,
  clearCurrentTodoMethod,
  editTodoMethod,
  removeTodoMethod,
  setCurrentTodoMethod,
  toggleCompleteMethod,
} from "./todoSliceMethods";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello World", completed: false }],
  currentTodo: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodoMethod,
    toggleComplete: toggleCompleteMethod,
    removeTodo: removeTodoMethod,
    editTodo: editTodoMethod, //hatana hai
    setCurrentTodo: setCurrentTodoMethod,
    clearCurrentTodo: clearCurrentTodoMethod,
  },
});

export const {
  addTodo,
  removeTodo,
  toggleComplete,
  editTodo,
  setCurrentTodo,
  clearCurrentTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
