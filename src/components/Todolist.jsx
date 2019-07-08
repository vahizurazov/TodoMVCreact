import React from 'react';
import SelectAll from './SelectAll';

function TodoList(props) {
  let item = props.itemList;
  let visibleItems = props.visibleItems;
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
          const classNameEditing = props.editing === item.id ? 'editing' : '';
          const classNameChecked = item.checked ? 'completed' : '';
          return (
            <li
              key={item.id}
              className={`${classNameChecked} ${classNameEditing}`}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  id={item.id}
                  checked={item.checked}
                  onChange={() => props.checked(item.id)}
                />
                <label htmlFor={i} onDoubleClick={props.handleChange(item.id)}>
                  {item.label}
                </label>
                <button
                  onClick={() => props.deleted({ i })}
                  className="destroy"
                />
              </div>
              <input
                // ref="editField"
                className="edit"
                value={item.label}
                // onBlur={this.handleSubmit}
                onChange={props.handleChangeVal}
                // onKeyDown={this.handleKeyDown}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;
