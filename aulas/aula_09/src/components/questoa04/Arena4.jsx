import React from "react";

const Arena4 = (props) => {
  return (
    <div>
      <h1>{props.nameArena}</h1>
      {props.children}
    </div>
  );
};
export { Arena4 };
