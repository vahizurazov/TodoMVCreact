import React from "react";

function SelectAll(props) {
  return (  
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={() => props.selectAll()}
        checked={props.isAllChecked()}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}

export default SelectAll;
