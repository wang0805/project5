import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { MyContext } from "./mycontext";
import FirstLvl from "./components/firstlvl";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  componentDidMount() {
    fetch("./api/test")
      .then(res => res.json())
      .then(result => this.setState({ username: result[0] }));
  }

  render() {
    return (
      <div className="App">
        <MyContext.Provider value={{ state: this.state }}>
          <FirstLvl />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
