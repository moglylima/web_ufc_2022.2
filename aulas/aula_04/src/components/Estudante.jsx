import React from "react";

const Estudante = ({ nome, curso, universidade, disciplina}) => {

    return (
        <div>
            Nome: {nome}<br />
            Curso: {curso}<br />
            Universidade: {universidade}<br />
            Disciplina: {disciplina}
        </div>
    )

}

export default Estudante