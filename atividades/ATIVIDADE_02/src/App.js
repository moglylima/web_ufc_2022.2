import React, { Component } from "react";
import "./App.css";
import { VotacaoCidades } from "./components/VotacaoCidades";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <VotacaoCidades />
      </div>
    );
  }
}

export default App;
