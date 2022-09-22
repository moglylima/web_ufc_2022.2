import React, { Component } from 'react';
import './App.css';
import { HelloWorld } from './components/HelloWorld'
import { HelloWorldHeron } from './components/HelloWorldHeron'
import { Estudante } from './components/Estudante'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld />
        <HelloWorldHeron />
        <Estudante
          nome="Mogleson"
          curso="R.C"
          universidade="UFC"
        />
      </div>
    );
  }
}

export default App;
