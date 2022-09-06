import React from "react";

export function IMC({ peso, altura }) {

    function calculoImc(peso, altura) {
        let imc = peso / (altura ** 2)
        return imc.toFixed(2);
    }

    function statusIMC(imc) {

        if (imc < 17) {
            return "Muito abaixo de peso"
        } else if (imc <= 17 && imc <= 18.49) {
            return "Abaixo do peso"
        } else if (imc <= 17 && imc <= 18.49) {
            return "Abaixo do peso"
        }


    }


    /*
        < 17 -> Muito abaixo de peso
        17 - 18.49 abaixo do peso
        18.50-24 normal
        25-29 Acima do peso
        30-34 obesidade 1
        35-39.99 obesidade 2
        >40 obesidade 3


    */

    return (
        <div>
            <h1>Seu IMC: {calculoImc(peso, altura)}</h1>
            <h3></h3>
        </div>
    )
}