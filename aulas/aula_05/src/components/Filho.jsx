import React from "react";

const Filho = ({ nomePai, callBackPai }) => {
  return (
    <div>
      <button onClick={() => callBackPai("Silva")}>
        oi {nomePai}
      </button>
    </div>
  );
};

export default Filho;
