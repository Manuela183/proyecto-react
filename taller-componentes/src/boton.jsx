import React from 'react'

export function Boton() {
    function reaccion(){
        alert("Bienvenido");
    }
    return (
        <center>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={reaccion}>Clic Aquí</button>
        </center>
    )
};