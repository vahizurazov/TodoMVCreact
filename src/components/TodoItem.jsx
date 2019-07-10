import React, { Component } from "react";
import TodoTextInput from "./TodoTextInput";
import classnames from "classnames";

export default class TodoItem extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      isEditing: false
    };
  }

  handleDoubleClick = () => {
    this.setState({ isEditing: true });
  };

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleted(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ isEditing: false });
  };

  render() {
    const { todo } = this.props;
    return (
      <li
        className={classnames({
          completed: todo.checked,
          editing: this.state.isEditing
        })}
      >
        {this.state.isEditing ? (
          <TodoTextInput
            text={todo.label}
            isEditing={this.state.isEditing}
            onSave={text => this.handleSave(todo.id, text)}
          />
        ) : (
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              id={todo.id}
              checked={todo.checked}
              onChange={this.props.checked(todo.id)}
            />
            <label onDoubleClick={this.handleDoubleClick}>{todo.label}</label>
            <button
              className="destroy"
              onClick={() => this.props.deleted(todo.id)}
            />
          </div>
        )}
      </li>
    );
  }
}
