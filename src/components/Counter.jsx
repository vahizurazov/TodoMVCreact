import React from 'react';


function Counter(props) {

  let uncheckItem = props => {
    let x = 0;
    props.itemList.forEach(el => {
      if (!el.checked) {
        x++;
      }
    });
    return x;
  };
  return <span className="todo-count"> {uncheckItem(props)} items left</span>;
}

export default Counter;