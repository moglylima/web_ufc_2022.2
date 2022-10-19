import axios from "axios";
import React, { useEffect, useState } from "react";

const Questao05 = () => {
  const [paises, setPaises] = useState([]);
  const [regiao, setRegiao] = useState("africa");
  const [menor, setMenor] = useState("");
  const [maior, setMaior] = useState("");

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
  }, [regiao]);
  // Aqui colocamos a lista de parametros que o useEffect vai observar,
  // se algum deles mudar, o useEffect vai ser executado novamente.

  function maiorPopulacao() {
    let maior = 0;
    let pais = "";
    paises.forEach((element) => {
      if (element.population > maior) {
        maior = element.population;
        pais = element.name;
      }
    });
    return pais;
  }

  function menorPopulacao() {
    let menor = paises[0].population;
    let pais = "";
    paises.forEach((element) => {
      if (element.population < menor) {
        menor = element.population;
        pais = element.name;
      }
    });
    return pais;
  }

  // Aqui usamos o useEffect para executar a função maiorPopulacao() e menorPopulacao()
  useEffect(() => {
    if (regiao === "americas") {
      setMaior(maiorPopulacao());
    }
    if (regiao === "asia") {
      setMenor(menorPopulacao());
    }
  }, [paises]);

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={(event) => {
          setRegiao("americas"), console.log(regiao);
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

      <p>O país com maior População das Americas: {maior}</p>
      <p>O país com menor População da Asia: {menor}</p>
    </div>
  );
};

export { Questao05 };
