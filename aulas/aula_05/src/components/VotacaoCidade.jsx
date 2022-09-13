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
      <button>Crateus</button>
      <button>Limoeiro</button>
    </div>
  );
};
