import React, { useState } from "react";
export const VotacaoCidades = () => {
  const [cidades, setCidades] = useState([]);
  const [cidade, setCidade] = useState("");

  function linhasTabela() {
    return cidades.map((cidade) => (
      <tr className="">
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

      <div>
        <label className="m-1 flex-10">Cidade</label>
        <input
          className="form-control-lg"
          type="text"
          onChange={(event) => {
            setCidade(event.target.value);
          }}
        />
        <button className="btn btn-dark m-1" onClick={adicionarCidade}>
          Cadastrar Cidade
        </button>
      </div>

      <table className="table table-striped-columns table-hover">
        <thead>
          <tr>
            <th>Cidade</th>
            <th>Qtd. Votos</th>
          </tr>
        </thead>
        <tbody>{linhasTabela()}</tbody>
      </table>

      <button className="btn btn-primary m-1" onClick={mostreResultado}>
        Resultado
      </button>
      <button className="btn btn-warning m-1" onClick={reiniciar}>
        Reiniciar
      </button>
      <button className="btn btn-danger m-1" onClick={reset}>
        Resetar
      </button>
    </div>
  );
};
