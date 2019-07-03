import React from "react";
// import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/Todolist";
import TodoFooter from "./components/TodoFooter";

class App extends React.Component {
  state = {
    itemsList: [],
    visibleItems: [],
    currentFilter: "all"
  };
  handleSubmit = e => {
    let inputValue = e.target.value;
    if (e.keyCode !== 13 || inputValue === "") return;
    this.setState(prevState => ({
      itemsList: prevState.itemsList.concat({
        label: inputValue,
        checked: false,
        id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36)
      })
    }));
    console.log(this.state,'state');
    
    e.target.value = "";
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
          itemsList = {this.state.itemsList}/>
        <TodoFooter />
      </section>
    );
  }
}

export default App;
