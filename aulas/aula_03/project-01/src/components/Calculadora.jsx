import React from "react";

export function Calculadora({op, x, y}){
    
    function soma(){
        return x + y;
    }

    function subtracao(){
        return x - y;
    }

    function divisao(){
        return x / y;
    }

    function multiplicacao(){
        return x * y;
    }
    
    return(
        <div>
            
        </div>
    )
}