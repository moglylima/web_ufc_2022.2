import React from "react";

export function IMC({ peso, altura }) {

    const imc = calculo()

    function calculo() {
        return (peso / (altura ** 2))
    }

    function status() {
        if (imc < 18.5) {
            return (
                <div>
                    <h3>Abaixo do peso!</h3>
                </div>
            )
        }
        if (imc >= 18.5 && imc <= 24.9) {
            return (
                <div>
                    <h3>Peso normal!</h3>
                </div>
            )
        }
        if (imc >= 25 && imc <= 29.9) {
            return (
                <div>
                    <h3>Excesso de Peso!</h3>
                </div>
            )
        } 
        if (imc >= 30 && imc <= 35) {
            return (
                <div>
                    <h3>Excesso de Peso!</h3>
                </div>
            )
        } return (
            <div>
                <h3>Obesidade Extrema!</h3>
            </div>
        )
    }


    return (
        <div>
            <h1>Seu IMC: {imc.toFixed(2)} </h1>
            <h3>Sua situação é: {status()}</h3>
        </div>
    )
}