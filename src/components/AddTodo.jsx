import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  editTodo,
  clearCurrentTodo,
} from "../features/todo/todoSlice";
import { enqueueSnackbar } from "notistack";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const currentTodo = useSelector((state) => state.currentTodo);
  console.log("currentTodo", currentTodo);

  useEffect(() => {
    if (currentTodo) {
      setInput(currentTodo.text);
      inputRef.current.focus();
    } else {
      setInput("");
    }
  }, [currentTodo]);

  const addTodoHandler = (e) => {
    e.preventDefault();

    if (input.trim()) {
      if (currentTodo) {
        dispatch(editTodo({ id: currentTodo.id, text: input.trim() }));
        clearCurrentTodo();
      } else {
        dispatch(addTodo(input.trim()));
      }
    } else {
      const message = "Please Enter a Valid Todo";
      enqueueSnackbar(message, {
        variant: "info",
        anchorOrigin: { horizontal: "right", vertical: "top" },
        autoHideDuration: 1000,
      });
    }

    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {currentTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
