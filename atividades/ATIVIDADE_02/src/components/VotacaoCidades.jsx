import React, { useState } from "react";

export const VotacaoCidades = () => {
  const [cidades, setCidades] = useState([]);
  const [cidade, setCidade] = useState("");

  function linhasTabela() {
    return cidades.map((cidade) => (
      <tr>
        <td>{cidade.nome}</td>
        <td>{cidade.votos}</td>
        <td>
          <button onClick={() => votar(cidade.nome)}>Votar</button>
        </td>
      </tr>
    ));
  }
  function computarVotacao() {
    let maior = 0;
    let nameCidades = [];

    for (let i = 0; i < cidades.length; i++) {
      if (cidades[i].votos > maior) {
        maior = cidades[i].votos;
        nameCidades = [];
      }
      if (cidades[i].votos === maior) {
        nameCidades.push(cidades[i].nome);
      }
    }
    const resultado = { cidades: nameCidades, maior: maior };
    //Retornamos um obj. contendo um array com as cidades e o número de votos.
    return resultado;
  }

  function votar(cidade) {
    const novaLista = cidades.map((c) => {
      if (c.nome === cidade) {
        return { ...c, votos: c.votos + 1 };
      }
      return c;
    });
    setCidades(novaLista);
  }

  function mostreResultado() {
    //Aqui chamamos a função que computa a votação(guardamos o retorno em uma constante)
    let resultado = computarVotacao();

    //Aqui desestruturamos o objeto que recebemos da função computarVotacao
    let cidades = resultado.cidades,
      maior = resultado.maior;

    //Aqui verificamos se houve algum voto
    if (maior === 0) {
      return alert("Nenhuma cidade foi votada!");
    }
    // Aqui verificamos quem foi a cidade mais votada
    if (cidades.length === 1) {
      return alert(
        "A cidade com mais votos é " + cidades[0] + " com " + maior + " voto(s)"
      );
    }
    //Aqui tratamos o empate
    if (cidades.length > 1) {
      return alert(
        "As cidades com mais votos são " +
          cidades +
          " com " +
          maior +
          " voto(s)"
      );
    }
  }

  function reiniciar() {
    const novaLista = cidades.map((c) => {
      return { ...c, votos: 0 };
    });
    setCidades(novaLista);
  }

  function reset() {
    setCidades([]);
  }

  function adicionarCidade() {
    if (cidade === "") {
      return alert("Digite o nome da cidade!");
    }
    setCidades([...cidades, { nome: cidade, votos: 0 }]);
  }
  return (
    <div>
      <h2>Votação de Cidades</h2>

      <form onSubmit={adicionarCidade}>
        <label>Cidade</label>
        <input
          type="text"
          onChange={(event) => {
            setCidade(event.target.value);
          }}
        />
        <button type="submit">Cadastrar Cidade</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Cidade</th>
            <th>Qtd. Votos</th>
          </tr>
        </thead>
        <tbody>{linhasTabela()}</tbody>
      </table>

      <button onClick={mostreResultado}>Resultado</button>
      <button onClick={reiniciar}>Reiniciar</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
};
