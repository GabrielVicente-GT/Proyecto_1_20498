import React from 'react'
import '../Styles/ContenidoParteB.css'
import Section from './ElementosCont'
import A from '../Images/A.jpg'
import B from '../Images/B.jpg'
import C from '../Images/C.jpg'
import D from '../Images/D.jpg'
import E from '../Images/E.jpg'
import F from '../Images/F.jpg'
import G from '../Images/G.jpg'
import H from '../Images/H.jpg'

const ContenidoParteB = () => {
  return (
    <div className="CPB">
      <div className="CA2">
        <Section Imagen={A} TituloA="Informacion" TituloB="Poder y Ciudadania" Fecha="24 05 22" Principal="Los Q2.4 millones que el Cacif gastó para acercarse a Washington en los últimos cuatro años" />
        <Section Imagen={B} TituloA="Informacion" TituloB="Defensa del Consumidor" Fecha="22 05 22" Principal="Las «Semillas Nuevas» no son la solución al hambre en Guatemala" />
        <Section Imagen={C} TituloA="Informacion" TituloB="" Fecha="18 05 22" Principal="Ellas toman decisiones en un sistema que limita su participación" />
        <Section Imagen={D} TituloA="Informacion" TituloB="Poder y Ciudadania" Fecha="17 05 22" Principal="Una foto une a Giammattei con los Baldizón y los Q60 millones para dos empresas del excandidato" />
        <Section Imagen={E} TituloA="Informacion" TituloB="Poder y Ciudadania" Fecha="17 05 22" Principal="Cómo, en dos «rounds», la CC hizo que Consuelo Porras repitiera gestión" />
        <Section Imagen={F} TituloA="Editoriales" TituloB="Poder y Ciudadania" Fecha="16 05 22" Principal="Cuando ganar implica una irreparable pérdida" />
        <Section Imagen={G} TituloA="Informacion" TituloB="Dessigualdad" Fecha="16 05 22" Principal="Anya Marino y la importancia de la representación LGBTIQ+ en la academia" />
        <Section Imagen={H} TituloA="Informacion" TituloB="Poder y Ciudadania" Fecha="15 05 22" Principal="El Estado salvadoreño y las maras: una historia que se repite y endurece" />
      </div>
      <div className="BotonAparte">
        <button type="button" className="BotonExtra">Ir a sección</button>
      </div>
    </div>
  )
}

export default ContenidoParteB
