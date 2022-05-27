import React from 'react'
import '../Styles/ContenidoParteC.css'
import SectionFoot from './ElementoFoot'

const ContenidoParteC = () => {
  return (
    <div className="CPC">
      <div className="ColumnasA">
        <span className="Preferencias">LAS PREFERIDAS DE NUESTROS LECTORES</span>
        <SectionFoot Texto="Ricardo Falla: «¿Y qué hacía este cura metido en esto?»" Tipo="AAA" />
        <SectionFoot Texto="Una foto une a Giammattei con los Baldizón y los Q60 millones para dos empresas del excandidato" Tipo="AAA" />
        <SectionFoot Texto="Los Q2.4 millones que el Cacif gastó para acercarse a Washington en los últimos cuatro años" Tipo="AAA" />
        <SectionFoot Texto="Diario Militar: estos son los nueve militares que deben enfrentar juicio" Tipo="AAA" />
        <SectionFoot Texto="El juez Gálvez y la represión de los 80 en formato 2022" Tipo="AAA" />
        <SectionFoot Texto="Qué pasó en la Usac, el impasse en la elección de rector y los tres escenarios que quedan" Tipo="AAA" />
        <SectionFoot Texto="La Cámara de Industria intentó detener la Filgua 2022" Tipo="AAA" />

      </div>

      <div className="ColumnasB">
        <span className="Conocenos">CONÓCENOS</span>
        <SectionFoot Texto="¿Quiénes somos?" Tipo="AA" />
        <SectionFoot Texto="¿Quiénes somos?" Tipo="AA" />
        <SectionFoot Texto="Convocatorias" Tipo="AA" />
        <SectionFoot Texto="¿Cómo colaborar en Plaza Pública?" Tipo="AA" />
        <SectionFoot Texto="Articles in English" Tipo="AA" />
        <SectionFoot Texto="Fe de error" Tipo="AA" />
        <SectionFoot Texto="Estantería" Tipo="AA" />
        <SectionFoot Texto="Reproducir contenido" Tipo="AA" />
        <SectionFoot Texto="Reconocimientos" Tipo="AA" />
      </div>

    </div>
  )
}

export default ContenidoParteC
