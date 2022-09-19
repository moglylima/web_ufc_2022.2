import React, { useState } from "react";

const VotacaoCidades = () => {

    // Votação de Cidades
    // Cidade melhor votada

    const [quixada, setQuixada] = useState(0)
    const [banabuiu, setBanabuiu] = useState(0)
    const [quixeramobim, setQuixeramobim] = useState(0)
    const [melhorVotado, setMelhorVotado] = useState("")

    function resultado() {
        if (quixada === quixeramobim || quixada === banabuiu || banabuiu === quixeramobim) {
            setMelhorVotado("Empate...")
        }

        if (quixada > banabuiu && quixada > quixeramobim) {
            return setMelhorVotado("Quixada")
        }
        if (banabuiu > quixeramobim) {
            return setMelhorVotado("Banabuiu")
        }
        if (quixeramobim > quixada) {
            return setMelhorVotado("quixeramobim")
        }
    }

    return (
        <div>


            <table class="table">
                <thead>
                    <tr><th colSpan={4}>Votação Cidades</th></tr>
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
                            <button type="button" class="btn btn-primary"
                                onClick={() => setQuixada(quixada + 1)}
                            >Votar</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Quixeramobim</td>
                        <td>{quixeramobim}</td>
                        <td>
                            <button type="button" class="btn btn-primary"
                                onClick={() => setQuixeramobim(quixeramobim + 1)}
                            > Votar</button>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Banabuiu</td>
                        <td>{banabuiu}</td>
                        <td>
                            <button type="button" class="btn btn-primary"
                                onClick={() => setBanabuiu(banabuiu + 1)}
                            >Votar</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div>

                <button
                    onClick={resultado}
                    type="button" class="btn btn-dark">
                    Resultado final
                </button>
                <br /> Resultado: {melhorVotado}


            </div>


        </div >
    )
}

export default VotacaoCidades