import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reorder } from "framer-motion";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-black text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">To-Do List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded w-full bg-gray-700 text-white"
          placeholder="Add a new task..."
        />
        <button
          onClick={addTodo}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          Add
        </button>
      </div>
      <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
        <AnimatePresence>
          {todos.map((todo) => (
            <Reorder.Item key={todo.id} value={todo}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                whileHover={{ scale: 1.02 }}
                className={`flex justify-between items-center p-3 rounded-lg ${
                  todo.completed
                    ? "bg-green-800 line-through text-green-300"
                    : "bg-gray-800"
                }`}
              >
                <span
                  onClick={() => toggleComplete(todo.id)}
                  className={`flex-1 cursor-pointer ${
                    todo.completed ? "text-green-400" : ""
                  }`}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="text-red-400 hover:text-red-600 transition duration-200"
                >
                  Delete
                </button>
              </motion.div>
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>
    </div>
  );
};

export default ToDoList;
