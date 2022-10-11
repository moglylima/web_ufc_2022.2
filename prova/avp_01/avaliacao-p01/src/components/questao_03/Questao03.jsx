import axios from "axios";
import React, { useEffect, useState } from "react";

const Questao03 = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const generateTableBody = () => {
    return pokemons.map((pokemon, index) => {
      return (
        <tr>
          <td>pokemon.name</td>
          <td>pokemon.url</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h4>List Pokemons</h4>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>url</td>
          </tr>
        </thead>
        <tbody>{generateTableBody()}</tbody>
      </table>
    </div>
  );
};

export { Questao03 };
