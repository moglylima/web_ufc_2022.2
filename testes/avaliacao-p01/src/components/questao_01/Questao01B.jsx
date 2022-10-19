import React from "react";

const Questao01B = () => {
  let disciplinas = ["WEB", "Gerência de Projeto", "Análise de Desempenho"];

  const listItens = () => {
    return disciplinas.map((item, index) => {
      return (
        <li className="list-group-item" key={index}>
          {item}
        </li>
      );
    });
  };

  return (
    <div>
      <h4 className="list-group-item">Disciplinas</h4>
      <ul className="list-group">{listItens()}</ul>
    </div>
  );
};

export { Questao01B };
