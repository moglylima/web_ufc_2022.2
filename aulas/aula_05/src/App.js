import React, { Component } from "react";
import "./App.css";
import Pai from "./components/Pai";
import Contador from "./components/state/Contador";

import VotacaoCidade from "./components/VotacaoCidade";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Pai /> */}
        {/* <Contador /> */}

        <VotacaoCidade/>
      </div>
    );
  }
}

export default App;
