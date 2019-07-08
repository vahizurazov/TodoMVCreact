import React from "react";
import TodoList from "./components/Todolist";
import TodoFooter from "./components/TodoFooter";

class App extends React.Component {
  state = {
    itemsList: [],
    visibleItems: [],
    view: "all",
    isAllChecked: () => {
      if (
        this.state.itemsList.filter(el => el.checked).length ===
        this.state.itemsList.length
      ) {
        return true;
      } else return false;
    }
  };
  handleSubmit = e => {
    let inputValue = e.target.value.trim();
    if (e.keyCode !== 13 || inputValue === "") return;
    this.setState(prevState => ({
      itemsList: prevState.itemsList.concat({
        label: inputValue,
        checked: false,
        id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36)
      })
    }));
    e.target.value = "";
  };

  deleteItem = id => {
    this.setState(prevState => ({
      itemsList: prevState.itemsList.filter((el, l) => l !== id.i)
    }));
  };

  checkItem = id => {
    this.setState(prevState => ({
      itemsList: prevState.itemsList.map(el => {
        if (el.id === id) {
          el.checked = !el.checked;
        }
        return el;
      })
    }));
  };

  selectAll = () => {
    if (this.state.isAllChecked()) {
      this.setState(prevState => ({
        itemsList: prevState.itemsList.map(el => {
          el.checked = false;
          return el;
        })
      }));
    } else {
      this.setState(prevState => ({
        itemsList: prevState.itemsList.map(el => {
          el.checked = true;
          return el;
        })
      }));
    }
  };
//------------------------------------------
  clearCompleted = () => {    
    this.setState(prevState => ({
      itemsList: prevState.itemsList.filter(el => !el.checked),
      visibleItems: []
    }));
  };

//---------------------------------------
  render() {
    // console.log(this.state, 'this.state');
    
    return (
      <section className="todoapp">
        <header className="header">
          <h1>Todos</h1>
          <input
            type="text"
            onKeyDown={this.handleSubmit}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        <TodoList
          itemList={this.state.itemsList}
          deleted={this.deleteItem}
          checked={this.checkItem}
          selectAll={this.selectAll}
          isAllChecked={this.state.isAllChecked}
        />
        <TodoFooter
        itemList={this.state.itemsList}
        clearCompleted={this.clearCompleted}
          onlyCompleted={this.onlyCompleted}
          allTasks={this.allTasks}
        />
      </section>
    );
  }
}

export default App;
