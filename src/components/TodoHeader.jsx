import React from "react";

function TodoHeader(props) {
  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}

export default TodoHeader;
