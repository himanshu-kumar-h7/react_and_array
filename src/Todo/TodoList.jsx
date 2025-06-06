import React, { useState } from "react";

const TodoApp = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (text.trim() === "") return;
    setTodos((prev) => [...prev, text]);
    setText("");
  };

  const handleDelete = (indexToDelete) => {
    setTodos((prev) => prev.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{""}
            <button onClick={() => handleDelete(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
