import React from "react";

const Disciplina = ({children, disciplina}) => {

    return (
        <div>
            <h1>{disciplina}</h1>
            {
                React.Children.map(
                    children,
                    (estudante)=> React.cloneElement(estudante,{disciplina})
                )
            }
        </div>
    )

}

export default Disciplina