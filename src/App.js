import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  const addTodo = (newTodo) => {
    fetch(`${process.env.REACT_APP_API_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodo),
    })
      .then((res) => res.json())
      .then((savedTodo) => setTodos([...todos, savedTodo]))
      .catch((err) => console.error("Error adding todo:", err));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
