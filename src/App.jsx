import React from 'react';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex flex-col items-center justify-center p-5">
      <h1 className="text-4xl font-bold text-white mb-5 drop-shadow-md">My To-Do List</h1>
      <ToDoList />
    </div>
  );
}

export default App;
