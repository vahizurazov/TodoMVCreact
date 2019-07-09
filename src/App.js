import React, { Component } from "react";
import TodoList from "./components/Todolist";
import TodoFooter from "./components/TodoFooter";

class App extends Component {
  constructor(...props) {
    super(...props);

    this.state = {
      itemsList: [],
      visibleItems: [],
      view: "all",
      editing: null,
      tempValue: "",
      isAllChecked: () => {
        if (
          this.state.itemsList.filter(el => el.checked).length ===
          this.state.itemsList.length
        ) {
          return true;
        } else return false;
      }
    };

    this.changeFilterState = this._changeFilterState.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemsList !== this.state.itemsList) {
      this.updateViewList();
    }
  }
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
    this.updateViewList();
  };

  deleteItem = id => {
    this.setState(prevState => ({
      itemsList: prevState.itemsList.filter(item => item.id !== id)
    }));
  };

  editTodo = (id, text) => {
    this.setState(prevState => ({
      itemsList: prevState.itemsList.map(el => {
        if (id === el.id) {
          el.label = text;
        }
        return el;
      })
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
    this.updateViewList();
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

  clearCompleted = () => {
    this.setState(prevState => ({
      itemsList: prevState.itemsList.filter(el => !el.checked),
      visibleItems: []
    }));
  };
  updateViewList = () => {
    switch (this.state.view) {
      case "active":
        this.setState({
          visibleItems: this.state.itemsList.filter(el => !el.checked)
        });
        break;
      case "completed":
        this.setState({
          visibleItems: this.state.itemsList.filter(el => el.checked)
        });
        break;
      default:
        this.setState({
          visibleItems: this.state.itemsList
        });
    }
  };

  _changeFilterState = e => {
    switch (e.target.hash) {
      case "#/active":
        this.setState(prevState => ({
          view: "active",
          visibleItems: prevState.itemsList.filter(el => !el.checked)
        }));
        break;
      case "#/completed":
        this.setState(prevState => ({
          view: "completed",
          visibleItems: prevState.itemsList.filter(el => el.checked)
        }));
        break;
      default:
        this.setState(prevState => ({
          view: "all",
          visibleItems: prevState.itemsList
        }));
    }
  };

  handleChange = id => () => {
    this.setState({ editing: id });
  };
  handleChangeVal = e => {
    this.setState({ tempValue: e.target.value });
  };

  render() {
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
          editTodo={this.editTodo}
          checked={this.checkItem}
          selectAll={this.selectAll}
          isAllChecked={this.state.isAllChecked}
          view={this.state.view}
          visibleItems={this.state.visibleItems}
          handleChange={this.handleChange}
          editing={this.state.editing}
          handleChangeVal={this.handleChangeVal}
        />
        <TodoFooter
          itemList={this.state.itemsList}
          clearCompleted={this.clearCompleted}
          onFilterStateChange={this.changeFilterState}
          view={this.state.view}
        />
      </section>
    );
  }
}

export default App;
