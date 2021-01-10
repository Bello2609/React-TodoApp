import React, { Component } from 'react';
import Input from "./input.jsx"
import Data from "./data.jsx"
import "./index.css";

class App extends Component {
  state = {
    data: Data,
    name: "",
  };

  handleClick = (event) =>{
    event.preventDefault();
    const input = {
      name: this.state.name,
      check: false,
      id: this.state.data.length
    };
    const value = this.state.name.trim();
    if(!value){
      alert("Please Enter A message")
    }
    else{
    this.setState({
      data: [...this.state.data, input],
      name: ""
    })
  }
  }

  inputChange = (event) => {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  };

  handleChange = (id) => {
    this.setState({
      data: this.state.data.map((item) => {
        if (item.id === id) {
          item.check = !item.check;
        }
        return item;
      }),
    });
  };

  render() {
    const list = this.state.data.map((item) => (
      <Input item={item} key={item.id} change={this.handleChange} />
    ));
    return (
      <main className = "container">
        <h1>My Todo List</h1>
        <form onSubmit={this.handleClick}>
          <input
            onChange={this.inputChange}
            type="text"
            value={this.state.name}
          />
          <button
            type="submit"
            // onClick={this.state.name === "" ? null : this.handleClick}
          >
            Add Item
          </button>
        </form>
        <div className="list-div">{list}</div>
      </main>
    );
  }
}

export default App;