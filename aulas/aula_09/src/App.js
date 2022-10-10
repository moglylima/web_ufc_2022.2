import React, { Component } from 'react';
import './App.css';
import Hero from './components/questoa01/Hero'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero name='Baki' img='../img/baki.jpeg' ></Hero>        
      </div>
    );
  }
}

export default App;
