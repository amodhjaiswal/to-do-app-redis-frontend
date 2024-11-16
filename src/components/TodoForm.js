import React, { useState } from "react";
import "../styles/TodoList.css";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo({ task });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
