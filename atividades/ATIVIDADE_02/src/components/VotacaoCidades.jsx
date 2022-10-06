import React, { useState } from "react";

const VotacaoCidades = () => {
  // Votação de Cidades
  // Cidade melhor votada

  const [quixada, setQuixada] = useState(0);
  const [banabuiu, setBanabuiu] = useState(0);
  const [quixeramobim, setQuixeramobim] = useState(0);

  const cidadesStr = ["Quixada", "Banabuiu", "Quixeramobim"];
  const cidades = [quixada, banabuiu, quixeramobim];

  function computarVotacao() {
    let maior = 0;
    let nameCidades = [];

    for (let i = 0; i < cidades.length; i++) {
      if (cidades[i] > maior) {
        maior = cidades[i];
        nameCidades = [];
      }
      if (cidades[i] === maior) {
        nameCidades.push(cidadesStr[i]);
      }
    }
    //Retornamos um obj. contendo um array com as cidades e o número de votos.
    return { nameCidades, maior };
  }

  function mostreResultado() {
    //Aqui chamamos a função que computa a votação(guardamos o retorno em uma constante)
    let cityQtdVotos = computarVotacao();

    //Aqui desestruturamos o objeto que recebemos da função computarVotacao
    let nameCidades = cityQtdVotos.nameCidades,
      qtdVotos = cityQtdVotos.maior;

    //Aqui verificamos se houve algum voto
    if (qtdVotos === 0) {
      return alert("Nenhuma cidade foi votada!");
    }
    // Aqui verificamos quem foi a cidade mais votada
    if (nameCidades.length === 1) {
      return alert(
        "A cidade com mais votos é " +
          nameCidades +
          " com " +
          qtdVotos +
          " voto(s)"
      );
    }
    //Aqui tratamos o empate
    if (nameCidades.length > 1) {
      return alert(
        "As cidades com mais votos são " +
          nameCidades +
          " com " +
          qtdVotos +
          " voto(s)"
      );
    }
  }

  function reset() {
    setQuixada(0);
    setBanabuiu(0);
    setQuixeramobim(0);
  }

  //   Aprimorando

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th colSpan={4}>Votação Cidades</th>
          </tr>
          <tr>
            <th scope="col"></th>
            <th scope="col">Cidades</th>
            <th scope="col">Qtd. Votos</th>
            <th scope="col">Votar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Quixada</td>
            <td>{quixada}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setQuixada(quixada + 1)}
              >
                Votar
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Quixeramobim</td>
            <td>{quixeramobim}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setQuixeramobim(quixeramobim + 1)}
              >
                {" "}
                Votar
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Banabuiu</td>
            <td>{banabuiu}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => setBanabuiu(banabuiu + 1)}
              >
                Votar
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <button
          type="button"
          className="btn btn-sm btn-dark"
          onClick={mostreResultado}
        >
          Resultado
        </button>

        <button
          type="button"
          className="btn btn-sm btn-warning"
          onClick={reset}
        >
          Resetar Votação
        </button>
      </div>

      <form onSubmit={null}>
        <label>
          Nome:
          <input type="text" value={null} onChange={null} />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default VotacaoCidades;
