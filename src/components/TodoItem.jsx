import React, { Component } from 'react';
import TodoTextInput from './TodoTextInput';
import classnames from 'classnames';

export default class TodoItem extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      editing: false,
    };
  }

  handleDoubleClick = () => {
    this.setState({ editing: true });
  };

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.newTodo.deleted(id);
    } else {
      this.props.newTodo.editTodo(id, text);
    }
    this.setState({ editing: false });
  };

  render() {
    const { todo, newTodo } = this.props;
    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.label}
          editing={this.state.editing}
          onSave={text => this.handleSave(todo.id, text)}
        />
      );
    } else {
      element = (
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            id={todo.id}
            checked={todo.checked}
            onChange={newTodo.checked(todo.id)}
          />
          <label onDoubleClick={this.handleDoubleClick}>{todo.label}</label>
          <button
            className="destroy"
            onClick={() => newTodo.deleted(todo.id)}
          />
        </div>
      );
    }
    return (
      <li
        className={classnames({
          completed: todo.checked,
          editing: this.state.editing,
        })}
      >
        {element}
      </li>
    );
  }
}
