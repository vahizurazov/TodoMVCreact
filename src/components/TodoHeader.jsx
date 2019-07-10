import React, { Component } from "react";

class TodoHeader extends Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }

  handleSubmit = e => {
    let inputValue = e.target.value.trim();
    if (e.keyCode !== 13 || inputValue === "") return;
    this.props.addItem(inputValue);
    e.target.value = "";
  };

  handleBlur = e => {
    let inputValue = e.target.value.trim();
    if (inputValue === "") return;
    this.props.addItem(inputValue);
    e.target.value = "";
  };

  render() {
    return (
      <header className="header">
        <h1>Todos</h1>
        <input
          type="text"
          onKeyDown={this.handleSubmit}
          onBlur={this.handleBlur}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
    );
  }
}

export default TodoHeader;
