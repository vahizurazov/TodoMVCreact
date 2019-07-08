import React from "react";
import Counter from './Counter'
import ClearComleted from './ClearComleted'

function TodoFooter(props) {
  // console.log(props.clearCompleted,'props.clearCompleted');
  
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
        
      </ul>
      <ClearComleted
        clearCompleted={props.clearCompleted}
      />
    </footer>
  );
}

export default TodoFooter;
