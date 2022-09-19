import React, { useState } from "react";

const VotacaoCidade = () => {
  const [quixada, setQuixada] = useState(0);
  const [crateus, setCrateus] = useState(0);
  const [limoeiro, setLimoeiro] = useState(0);

  return (
    <div>
      <h2>Quixadá: {quixada}</h2>
      <h2>Crateus: {crateus}</h2>
      <h2>Limoeiro: {limoeiro}</h2>

      <button onClick={setQuixada(quixada + 1)}>Quixadá</button>
      <button onClick={setCrateus(crateus + 1)}>Crateus</button>
      <button onClick={setLimoeiro(limoeiro) + 1}>Limoeiro</button>
    </div>
  );
};
