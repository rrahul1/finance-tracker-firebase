import React from "react";
import { Routes, Route } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { TodoList } from "./pages/todo-list/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Auth />} />
        <Route path="/todo-list" element={<TodoList />} />
      </Routes>
    </div>
  );
}

export default App;
