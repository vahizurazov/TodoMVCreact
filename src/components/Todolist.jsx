import React from "react";
import SelectAll from "./SelectAll";

function TodoList(props) {
  let item = props.itemList;

  // console.log(item,'item  ');

  return (
    <section className="main">
      
      <SelectAll
        selectAll={props.selectAll}
        isAllChecked={props.isAllChecked}
      />
      <ul className="todo-list">
        {item.map((item, i) => {
          return (
            <li key={item.id} className={item.checked ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  id={item.id}
                  // defaultChecked = {item.checked}
                  checked={item.checked}
                  onChange={() => props.checked(item.id)}
                />
                <label htmlFor={i}>{item.label}</label>
                <button
                  onClick={() => props.deleted({ i })}
                  className="destroy"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
