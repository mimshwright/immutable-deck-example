import React, { Component } from "react";
import Card from "./Card.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="table">
          <Card value={"queen"} suit={"hearts"} />
          <Card value={"7"} suit={"clubs"} visible={false} />
        </div>
      </div>
    );
  }
}

export default App;
