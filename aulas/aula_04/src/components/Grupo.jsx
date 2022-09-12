import React from "react";

const Grupo = ({children, titulo})=>{
    return(
        <div>
            <h1>{titulo}</h1>
            {
                React.Children.map(
                    children,
                    (elemento)=> React.cloneElement(elemento,{titulo})
                )
            }
        </div>
    )
}

export default Grupo