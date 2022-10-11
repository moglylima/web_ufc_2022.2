import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Questao01 } from "./components/questao_01/Questao01";
import { Questao01A } from "./components/questao_01/Questao01A";
import { Questao01B } from "./components/questao_01/Questao01B";
import { Questao02 } from "./components/questao_02/Questao02";
import { Questao03 } from "./components/questao_03/Questao03";

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
    </div>
  );
};

export default App;
