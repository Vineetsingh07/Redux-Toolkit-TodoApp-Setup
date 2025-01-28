import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTodo,
  toggleComplete,
  setCurrentTodo,
  removeAllTodos,
} from "../features/todo/todoSlice";
import {
  removeDataFromLocalStorage,
  setDataInLocalStorage,
} from "../localStorage/localStorage";
import snackbar from "../common/snackbar";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const currentTodo = useSelector((state) => state.currentTodo);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!todos.some((todo) => todo.id === currentTodo?.id)) {
      dispatch(setCurrentTodo(null));
    }
  }, [todos, currentTodo, dispatch]);

  useEffect(() => {
    setDataInLocalStorage("todos", todos);
  }, [todos]);

  const handleRemoveTodos = () => {
    removeDataFromLocalStorage("todos");
    dispatch(removeAllTodos());
    const message = "All todos are Removed";
    snackbar(message);
  };

  return (
    <>
      <div className="mt-4 flex justify-between">
        <h2 className="text-2xl font-bold">Todos</h2>
        <button
          onClick={handleRemoveTodos}
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          disabled={!todos.length}
        >
          Clear Todos
        </button>
      </div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className={`mt-4 flex flex-col md:flex-row justify-between items-center px-4 py-2 rounded transform transition-all duration-300 ${
              todo.completed ? "bg-green-700 shadow-lg" : "bg-zinc-800"
            }`}
            key={todo.id}
          >
            {/* Left-aligned text */}
            <div className="flex items-center space-x-2 w-full md:w-auto">
              {/* Styled Checkbox */}
              <div className="flex items-center justify-center w-10 h-10 bg-zinc-700 rounded">
                <input
                  className="w-5 h-5 accent-pink-500"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => dispatch(toggleComplete(todo.id))}
                />
              </div>
              <p
                className={`text-white text-left transition-colors duration-300 break-all w-full ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
                style={{ wordWrap: "break-word" }}
              >
                {todo.text}
              </p>
            </div>

            {/* Right-aligned buttons */}
            <div className="flex space-x-2 mt-2 md:mt-0">
              <button
                onClick={() => dispatch(setCurrentTodo(todo))}
                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 3.487a2.25 2.25 0 113.182 3.182L7.063 19.65a4.5 4.5 0 01-1.894 1.126l-3.118.935.935-3.118a4.5 4.5 0 011.126-1.894L16.862 3.487z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 7.5l6 6"
                  />
                </svg>
              </button>

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
