import React from 'react';


function Counter(props) {
  console.log('props', props);
  const plural = props.itemList.length === 1 ? 'item': 'items'

  let uncheckItem = props => {
    let x = 0;
    props.itemList.forEach(el => {
      if (!el.checked) {
        x++;
      }
    });
    return x;
  };
  return <span className="todo-count"> {uncheckItem(props)} {plural} left</span>;
}

export default Counter;