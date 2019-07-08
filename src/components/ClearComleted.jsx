import React from 'react';

function ClearComleted(props) {
  let { clearCompleted } = props;
  return (
    <button onClick={clearCompleted} className="clear-completed">Clear completed</button>
  );
}


export default ClearComleted;
