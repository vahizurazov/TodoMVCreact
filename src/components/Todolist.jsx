import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }

  render() {
    const { itemList, visibleItems, selectAll,deleted,editTodo,checked,isAllChecked } = this.props;
    const todosCount = itemList.length;

    return (
      <section className="main">
        {!!todosCount && (
          <span>
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={isAllChecked()}
              onChange={selectAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
          </span>
        )}
        <ul className="todo-list">
          {visibleItems.map(todo => (
            <TodoItem key={todo.id} todo={todo}  deleted = {deleted} editTodo = {editTodo} checked={checked} />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
