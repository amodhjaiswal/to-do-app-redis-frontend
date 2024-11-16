import React from "react";
import "../styles/TodoList.css";

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo._id} className={todo.completed ? "completed" : ""}>
          {todo.task}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
