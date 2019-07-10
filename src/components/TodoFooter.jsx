import React, { Component } from "react";
import Counter from "./Counter";
import ClearComleted from "./ClearComleted";

class TodoFooter extends Component {
  constructor(...props) {
    super(...props);
    this.state = {};
  }
  render() {
    const { itemList, clearCompleted, onFilterStateChange, view } = this.props;

    if (!itemList.length) {
      return null;
    }
    const showButton = itemList.some(el => el.checked);

    return (
      <footer className="footer">
        <Counter itemList={itemList} />
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={view === "all" ? "selected" : ""}
              onClick={onFilterStateChange}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              className={view === "active" ? "selected" : ""}
              onClick={onFilterStateChange}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              className={view === "completed" ? "selected" : ""}
              onClick={onFilterStateChange}
            >
              Completed
            </a>
          </li>
        </ul>
        {!!showButton && <ClearComleted clearCompleted={clearCompleted} />}
      </footer>
    );
  }
}

export default TodoFooter;
