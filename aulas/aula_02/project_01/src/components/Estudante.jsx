
import React from "react";

export function Estudante({ nome, curso, universidade }) {
    return (
        <div>
            Nome: {nome} <br />
            Curso: {curso} <br />
            Universidade:{universidade} <br />
        </div>
    );
}

