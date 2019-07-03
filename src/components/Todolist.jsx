import React from "react";

function TodoList(props) {
  let itemsList = props.itemsList;

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list" />
    </section>
  );
}

export default TodoList;
