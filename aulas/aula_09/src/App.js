import React, { Component } from "react";
import "./App.css";
//Imports questions 01
import { Arena } from "./components/questoa01/Arena";
import { Enemy } from "./components/questoa01/Enemy";
import { Hero } from "./components/questoa01/Hero";

//Imports questions 02
import { Arena2 } from "./components/questoa02/Arena2";
import { World } from "./components/questoa03/World";

//import const
import {
  name01,
  name02,
  image01,
  image02,
} from "./components/questoa02/constantes";
import { Arena4 } from "./components/questoa04/Arena4";
import { Hero2 } from "./components/questoa04/Hero2";
import { Enemy2 } from "./components/questoa04/Enemy2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <u> Questão 01</u>
        </h1>
        <h1>Component Hero</h1>
        <Hero
          name="Wlademir"
          image="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Wlademir-Araujo-Tavares1-225x300.png"
        ></Hero>

        <h1>Component Enemy</h1>
        <Enemy
          name="Jefferson"
          image="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jefferson-de-Carvalho-Silva1-225x300.png"
        ></Enemy>

        <h1>Component Arena</h1>
        <Arena />

        <h1>
          <u> Questão 02</u>
        </h1>
        <h1>Component Arena2</h1>
        <Arena2 />

        <h1>
          <u> Questão 03</u>
        </h1>

        <World>
          <Arena />
          <Arena />
          <Arena />
        </World>

        <h1>
          <u> Questão 04</u>
        </h1>

        <Arena4 nameArena="Tokio - Underground Arena">
          <Hero2 name={name01} image={image01} />
          <Enemy2 name={name02} image={image02} />
        </Arena4>
      </div>
    );
  }
}

export default App;
