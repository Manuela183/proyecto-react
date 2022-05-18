import React from 'react'
import { Tabla } from './Tabla'
import { Boton } from './boton'
import { CampoTexto } from './CampoTexto'

export function Aplicacion() {
  return (
    <React.Fragment>
        <Tabla/>
        <CampoTexto/>
        <Boton/>
    </React.Fragment>
  )
}