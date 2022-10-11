import React from "react";

const Enemy2 = ({ name, image }) => {
  return (
    <div>
      <h2>Prof. {name}</h2>
      <img width="150px" src={image} />
    </div>
  );
};

export { Enemy2 };
