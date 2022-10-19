import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist//js/bootstrap.bundle.min.js";
import "./App.css";
import { Questao01 } from "./components/questao_01/Questao01";
import { Questao01A } from "./components/questao_01/Questao01A";
import { Questao01B } from "./components/questao_01/Questao01B";
import { Questao02 } from "./components/questao_02/Questao02";
import { Questao03 } from "./components/questao_03/Questao03";
import { Questao04 } from "./components/questao_04/Questao04";
import { Questao05 } from "./components/questao_05/Questao05";

const App = () => {
  return (
    <div className="container">
      <h1>Avaliação parcial 01</h1>

      <h1>
        <u> Questão 01</u>
      </h1>
      <Questao01>
        <Questao01A
          nome="Mogleson"
          sobrenome="Lima"
          curso="Redes de Computadores"
        />
        <Questao01B />
      </Questao01>

      <h1>
        <u> Questão 02</u>
      </h1>
      <Questao02 />

      <h1>
        <u> Questão 03</u>
      </h1>

      <Questao03 />

      <h1>
        <u> Questão 04</u>
      </h1>

      <Questao04 />

      <h1>
        <u> Questão 05</u>
      </h1>

      <Questao05 />
    </div>
  );
};

export { App };
