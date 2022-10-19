import axios from "axios";
import React, { useEffect, useState } from "react";

const Questao03 = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [onbutton, setOnOff] = useState();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
      .then((response) => {
        setPokemons(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [offset]);

  const generateTableBody = () => {
    return pokemons.map((pokemon, index) => {
      return (
        <tr key={index}>
          <td>{pokemon.name}</td>
          <td>{pokemon.url}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h4>List Pokemons</h4>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">name</th>
            <th scope="col">url</th>
          </tr>
        </thead>
        <tbody>{generateTableBody()}</tbody>
      </table>

      <button
        className="btn btn-primary"
        onClick={(event) => {
          setOffset(offset + 10);
        }}
      >
        Proximos 10
      </button>

      <button
        className="btn btn-primary"
        disabled={offset === 0}
        onClick={(event) => {
          setOffset(offset - 10);
        }}
      >
        Volte 10
      </button>
    </div>
  );
};

export { Questao03 };
