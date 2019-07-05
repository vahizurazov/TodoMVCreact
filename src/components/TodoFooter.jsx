import React from "react";
import Counter from './Counter'

function TodoFooter(props) {
  if (!props.itemList.length) {
    return null;
  }
  return (
    <footer className="footer">
      <Counter itemList={props.itemList} />
      <ul className="filters">
        <li>
          <a href="#/" className="selected">
            All
          </a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default TodoFooter;
