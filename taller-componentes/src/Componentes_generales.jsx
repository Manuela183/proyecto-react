import React from 'react'
import { Tabla } from './Tabla'
import { Boton } from './boton'
import { CampoTexto } from './CampoTexto'
import { Navbar } from './navbar'
import { Footer } from './Footer'

export function Aplicacion() {
  return (
    <React.Fragment>
        <Navbar/>
        <Tabla/>
        <CampoTexto/>
        <Boton/>
        <Footer/>
    </React.Fragment>
  )
}