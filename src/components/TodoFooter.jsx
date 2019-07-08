import React from 'react';
import Counter from './Counter';
import ClearComleted from './ClearComleted';

function TodoFooter(props) {
  let item = props.itemList;
  // console.log(props.handleClick,'item');

  if (!props.itemList.length) {
    return null;
  }
  return (
    <footer className="footer">
      <Counter itemList={props.itemList} />
      <ul className="filters">
        <li>
          <a
            href="#/"
            className={props.view === 'all' ? 'selected' : ''}
            onClick={props.handleClick}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/active"
            className={props.view === 'active' ? 'selected' : ''}
            onClick={props.handleClick}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/completed"
            className={props.view === 'completed' ? 'selected' : ''}
            onClick={props.handleClick}
          >
            Completed
          </a>
        </li>
      </ul>
      <ClearComleted clearCompleted={props.clearCompleted} />
    </footer>
  );
}

export default TodoFooter;
