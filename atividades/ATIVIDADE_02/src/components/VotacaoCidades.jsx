import React, { useEffect, useState } from "react";

const VotacaoCidades = () => {

    // Votação de Cidades
    // Cidade melhor votada

    const [quixada, setQuixada] = useState(0)
    const [banabuiu, setBanabuiu] = useState(0)
    const [quixeramobim, setQuixeramobim] = useState(0)

    const [maior, setMaior] = useState(0)
    const [menor, setMenor] = useState(0)

    const cidadesNames = ["Quixada", "Quixeramobim", "Banabuiu"]

    useEffect(() => {
        const cidades = [quixada, quixeramobim, banabuiu]

        let maiorLocal = maior
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] > maiorLocal) maiorLocal = cidades[i]
        }
        setMaior(maiorLocal)

        let menorLocal = maiorLocal
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] < menorLocal) menorLocal = cidades[i]
        }
        setMenor(menorLocal)

    }, [quixada, quixeramobim, banabuiu])

    function mostrarMaiores() {
        let maiores = ''
        const cidades = [quixada, quixeramobim, banabuiu]
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] === maior) maiores += cidadesNames[i] + ' '
        }
        return maiores
    }

    function mostrarMenores() {
        let menores = ''
        const cidades = [quixada, quixeramobim, banabuiu]
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i] === menor) menores += cidadesNames[i] + ' '
        }
        return menores
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
                {mostrarMaiores}
                {mostrarMenores}
            </div>



        </div>)
}

export default VotacaoCidades