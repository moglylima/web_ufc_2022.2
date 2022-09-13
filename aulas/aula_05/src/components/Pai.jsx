import React from "react";
import Filho from "./Filho";

const Pai = () => {

  const callBackPai = (msg) => {
    alert("Oi meu filho" + msg);
  };
  
  return (
    <div>
      <h1>
        <Filho nomePai="pai nome" callBackPai={callBackPai} />
      </h1>
    </div>
  );
};

export default Pai;
