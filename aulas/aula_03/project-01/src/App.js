import React, { Component } from "react";
import "./App.css";
// import { Calculadora } from './components/Calculadora';
import { IMC } from "./components/IMC";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Calculadora op={"SOMA"} x={10} y={29} /> */}

        <IMC peso={82} altura={1.82} />
      </div>
    );
  }
}

export default App;
