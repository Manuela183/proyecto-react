import React from 'react'

export function Boton() {
    function reaccion(){
        alert("Recuerda dismunuir el uso de redes sociales")
    }
    return (
        <center>
            <button type="button" class="btn btn-primary btn-lg btn-block" onClick={reaccion}>Clic Aquí</button>
        </center>
    )
};