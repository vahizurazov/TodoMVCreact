import React, { Component } from "react";
import TodoList from "./components/Todolist";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";

class App extends Component {
  constructor(...props) {
    super(...props);

    const initialItems = this.restoreState() || [];
    this.state = {
      itemsList: initialItems,
      visibleItems: initialItems,
      view: "all"
      
    };

    this.changeFilterState = this._changeFilterState.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.itemsList !== this.state.itemsList) {
      this.updateViewList();
      this.saveState();
    }
  }
  componentDidMount() {
    this.setState({
      itemsList: this.restoreState() || []
    });
  }

  isAllChecked = () => {
    const checkedState = this.state.itemsList.length;
    const filterCheck = this.state.itemsList.filter(el => el.checked).length;
    
    return filterCheck === checkedState ? true : false;
  };

  saveState = () => {
    try {
      return localStorage.setItem(
        `todo-itemList`,
        JSON.stringify(this.state.itemsList)
      );
    } catch (e) {
      console.log("ERROR");
    }
  };
  restoreState = () => {
    try {
      return JSON.parse(localStorage.getItem(`todo-itemList`));
    } catch (e) {
      console.log("ERROR");
    }
  };

  addItem = e => {
    this.setState(prevState => ({
      itemsList: prevState.itemsList.concat({
        label: e,
        checked: false,
        id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36)
      })
    }));
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

  checkItem = id => () => {
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
    if (this.isAllChecked()) {
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

  render() {
    return (
      <section className="todoapp">
        <TodoHeader addItem={this.addItem} />
        <TodoList
          itemList={this.state.itemsList}
          deleted={this.deleteItem}
          editTodo={this.editTodo}
          checked={this.checkItem}
          selectAll={this.selectAll}
          isAllChecked={this.isAllChecked}
          view={this.state.view}
          visibleItems={this.state.visibleItems}
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
