import React from "react";
import Counter from './Counter'
import ClearComleted from './ClearComleted'

function TodoFooter(props) {
  // let item =props.itemList 
  // console.log(props.handleClick,'item');
  
  if (!props.itemList.length) {
    return null;
  }
  return (
    <footer className="footer">
      <Counter itemList={props.itemList} />
      <ul className="filters">
        <li>
          <a href="#/" className= "selected"  onClick={ e => props.handleClick(e.target.hash)}>
            All
          </a>
        </li>
        <li>
          <a href="#/active"  onClick={ e => props.handleClick(e.target.hash)}>Active</a>
        </li>
        <li>
          <a href="#/completed" onClick={ e => props.handleClick(e.target.hash)}>Completed</a>
        </li>
      </ul>
      <ClearComleted
        clearCompleted={props.clearCompleted}
      />
    </footer>
  );
}

export default TodoFooter;
