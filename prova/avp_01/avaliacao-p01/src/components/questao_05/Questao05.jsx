import axios from "axios";
import React, { useEffect, useState } from "react";

const Questao05 = () => {
  const [paises, setPaises] = useState([]);
  const [regiao, setRegiao] = useState("africa");
  const [maisPop, setMaisPop] = useState("");
  const [menosPop, setMenosPop] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v2/region/${regiao}?fields=name,population`
      )
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

  const menorPopulacao = () => {
    let menor = paises[0].population;
    let pais = "";
    paises.forEach((element) => {
      if (element.population < menor) {
        menor = element.population;
        pais = element.name;
      }
    });

    return pais;
  };

  function result() {
    if (regiao === "americas") {
      return <p>O país com maior População é {maiorPopulacao()}.</p>;
    }
    if (regiao === "asia") {
      return <p>O país com menor População é {menorPopulacao()}.</p>;
    } else {
      return <p>Selecione uma região</p>;
    }
  }

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={(event) => {
          setRegiao("americas");
        }}
      >
        Americas
      </button>

      <button
        className="btn btn-primary"
        onClick={(event) => {
          setRegiao("asia");
        }}
      >
        Asia
      </button>

      {result()}
    </div>
  );
};

export { Questao05 };
