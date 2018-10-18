import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    show: ""
  };

  showDiv = divToShow => {
    this.setState({
      show: divToShow
    });
  };

  render() {
    const { show } = this.state;
    return (
      <div className="wrapper">
        <div className="one" className="button-wrapper">
          <button onClick={() => this.showDiv("first")} className="one">
            1
          </button>
          <button onClick={() => this.showDiv("second")} className="one">
            2
          </button>
          <button onClick={() => this.showDiv("third")} className="one">
            3
          </button>
        </div>
        <div className="one" className="content-wrapper">
          <div className={`one ${show === "first" ? "show" : "hide"}`}>
            Content 1
          </div>
          <div className={`one ${show === "second" ? "show" : "hide"}`}>
            Content 2
          </div>
          <div className={`one ${show === "third" ? "show" : "hide"}`}>
            Content 3
          </div>
        </div>
      </div>
    );
  }
}

export default App;
