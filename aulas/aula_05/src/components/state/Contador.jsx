import React, { useState } from "react";
//import MyImg from 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/David-Sena-Oliveira-Final1-225x300.png'
const Contador = () => {
  //let contador = 0;

  const [senna, setSenna] = useState(true);

  const [contador, setContador] = useState(0);

  const contar = () => {
    setContador(contador + 1);

    console.log(contador);
  };

  const alterStateSenna = () => {
    setSenna(!senna);
  };

  const alterSenna = () => {
    if (senna) {
      return (
        <img
          src="https://www.quixada.ufc.br/wp-content/uploads/2015/05/David-Sena-Oliveira-Final1-225x300.png"
          alt="Aqui senna img"
        />
      );
    }
    return (
      <div>
        <h1>Deu ruim...</h1>
      </div>
    );
  };

  return (
    <div>
      <h2>Contador {contador}</h2>

      <button onClick={contar}>Acrescentar</button>

      <button onClick={alterStateSenna}>Mudar</button>
    </div>
  );
};

export default Contador;
