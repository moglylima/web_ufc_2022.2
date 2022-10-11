import React from "react";
import { Enemy } from "./Enemy2";
import { Hero } from "./Hero2";
import { name01, name02, image01, image02 } from "./constantes";

const Arena2 = () => {
  return (
    <div>
      <Hero name={name01} image={image01}></Hero>
      <Enemy name={name02} image={image02}></Enemy>
    </div>
  );
};
export { Arena2 };
