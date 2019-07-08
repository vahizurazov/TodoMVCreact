import React from "react";
import SelectAll from "./SelectAll";

function TodoList(props) {
  let item = props.itemList;
  let visibleItems = props.visibleItems
  let view = props.view;
  let nowShow;
  view === 'all' ? (nowShow = item) : (nowShow = visibleItems);
  // console.log(props,'item  ');

  return (
    <section className="main">
      <SelectAll
        selectAll={props.selectAll}
        isAllChecked={props.isAllChecked}
      />
      <ul className="todo-list">
        {nowShow.map((item, i) => {
          return (
            <li key={item.id} className={item.checked ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  id={item.id}
                  checked={item.checked}
                  onChange={() => props.checked(item.id)}
                />
                <label htmlFor={i} >{item.label}</label>
                <button
                  onClick={() => props.deleted({ i })}
                  className="destroy"
                />
                <input
                  // ref="editField"
                  className="edit"
                  // value={null}
                  // onBlur={this.handleSubmit}
                  // onChange={props.handleChange}
                  // onKeyDown={this.handleKeyDown}
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
