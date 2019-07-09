import React from "react";
import Counter from "./Counter";
import ClearComleted from "./ClearComleted";

function TodoFooter(props) {
  if (!props.itemList.length) {
    return null;
  }
  const showButton = props.itemList.some(el => el.checked);

  return (
    <footer className="footer">
      <Counter itemList={props.itemList} />
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={props.view === "all" ? "selected" : ""}
            onClick={props.onFilterStateChange}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={props.view === "active" ? "selected" : ""}
            onClick={props.onFilterStateChange}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={props.view === "completed" ? "selected" : ""}
            onClick={props.onFilterStateChange}
          >
            Completed
          </a>
        </li>
      </ul>
      {!!showButton && <ClearComleted clearCompleted={props.clearCompleted} />}
    </footer>
  );
}

export default TodoFooter;
