import axios from "axios";
import React, { useEffect } from "react";

const Questao04 = () => {
  const [paises, setPaises] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/region/africa?fields=name,population")
      .then((response) => {
        setPaises(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const maiorPopulacao = () => {
    let maior = 0;
    let pais = "";
    paises.forEach((element) => {
      if (element.population > maior) {
        maior = element.population;
        pais = element.name;
      }
    });
    return pais;
  };

  return (
    <div>
      <h4>Maior População</h4>
      <p>O país com maior População é {maiorPopulacao()}.</p>
    </div>
  );
};

export { Questao04 };
