import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }

  render() {
    const { visibleItems, itemList } = this.props;
    const todosCount = itemList.length
    // console.log('!!todosCount',!!todosCount);
    
    return (
      <section className="main">
        {!!todosCount && (
          <span>
            <input
              id="toggle-all"
              className="toggle-all"
              type="checkbox"
              checked={this.props.isAllChecked()}
              onChange={this.props.selectAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
          </span>
        )}
        <ul className="todo-list">
          {visibleItems.map(todo => (
            // console.log('todo', todo)
            <TodoItem key={todo.id} todo={todo} newTodo={this.props} />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
