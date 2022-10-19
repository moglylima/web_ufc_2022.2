import React from "react";

const Questao01A = ({ nome, sobrenome, curso }) => {
  return (
    <div>
      <h4>Aluno</h4>
      <p>Nome: {nome}</p>
      <p>Sobrenome: {sobrenome}</p>
      <p>Curso: {curso}</p>
    </div>
  );
};

export { Questao01A };
