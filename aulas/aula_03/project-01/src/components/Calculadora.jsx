import React from "react";

export function Calculadora({ op, x, y }) {

    function soma() {
        return x + y;
    }

    function subtracao() {
        return x - y;
    }

    function divisao() {
        return x / y;
    }

    function multiplicacao() {
        return x * y;
    }

    function calculo() {
        if (op === "soma") {
            return (
                <h1>Resultado: {soma(x, y)}</h1>
            )
        }
        if (op === "subtracao") {
            return (
                <h1>Resultado: {subtracao(x, y)}</h1>
            )
        }
        if (op === "multiplicacao") {
            return (
                <h1>Resultado: {multiplicacao(x, y)}</h1>
            )
        }
        if (op === "divisao") {
            return (
                <h1>Resultado: {divisao(x, y).toFixed(2)}</h1>
            )
        }return(
            <h1>Operação invalida!!!</h1>
        )
    }

    return (
        <div>
            {calculo()}
        </div>
    )
}