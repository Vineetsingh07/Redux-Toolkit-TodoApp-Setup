import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text: "Hello World", completed: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const { id, text } = action.payload;

      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: text } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
