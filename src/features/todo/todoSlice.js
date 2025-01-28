import { createSlice, nanoid } from "@reduxjs/toolkit";
import {
  addTodoMethod,
  editTodoMethod,
  removeTodoMethod,
  toggleCompleteMethod,
} from "./todoSliceMethods";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello World", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodoMethod,
    toggleComplete: toggleCompleteMethod,
    removeTodo: removeTodoMethod,
    editTodo: editTodoMethod,
  },
});

export const { addTodo, removeTodo, toggleComplete, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
