import React from "react";
import { Enemy } from "./Enemy";
import { Hero } from "./Hero";

const Arena = () => {
  return (
    <div>
      <Hero
        name="Wlademir Araujo"
        image="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Wlademir-Araujo-Tavares1-225x300.png"
      ></Hero>
      <Enemy
        name="Jefferson de Carvalho"
        image="https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jefferson-de-Carvalho-Silva1-225x300.png"
      ></Enemy>
    </div>
  );
};
export { Arena };
