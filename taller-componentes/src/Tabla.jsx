import React from 'react'

export function Tabla() {
    return (
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Red Social</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Daniel</td>
                    <td>Diaz</td>
                    <td>Tinder</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Manuela</td>
                    <td>Marulanda</td>
                    <td>Instagram</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Juan</td>
                    <td>Giraldo</td>
                    <td>Reddit</td>
                </tr>
            </tbody>
        </table>
    )
};