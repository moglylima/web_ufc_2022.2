import React, { useState } from "react";
import "./style.css";

const Questao02 = () => {
  const [operacao, setOperacao] = useState(0);
  const [valor01, setValor01] = useState(0);
  const [valor02, setValor02] = useState(0);

  return (
    <div className="row">
      <div>
        <input
          name="valor01"
          type="text"
          onChange={(event) => {
            setValor01(parseFloat(event.target.value));
          }}
        />
        <input
          name="valor02"
          type="text"
          onChange={(event) => {
            setValor02(parseFloat(event.target.value));
          }}
        />
      </div>

      <div>
        <button
          onClick={(event) => {
            setOperacao(valor01 + valor02);
          }}
          className="btn btn-primary"
        >
          +
        </button>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            setOperacao(valor01 - valor02);
          }}
        >
          -
        </button>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            setOperacao(valor01 * valor02);
          }}
        >
          *
        </button>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            setOperacao(valor01 / valor02);
          }}
        >
          /
        </button>
      </div>
      <h5>Resultado: {operacao}</h5>
    </div>
  );
};

export { Questao02 };
