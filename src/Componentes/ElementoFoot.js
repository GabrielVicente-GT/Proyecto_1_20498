/* eslint-disable react/prop-types */
import React from 'react'
import '../Styles/ElementoFoot.css'

const ElementoFoot = ({ Texto, Tipo }) => {
  const [Especie, SetEspecie] = React.useState('FootEl')
  const [EspecieBarra, SetEspecieBarra] = React.useState('Barra')

  const confirmacion2 = () => {
    if (Tipo === 'AAA') {
      SetEspecie('FootEl')
      SetEspecieBarra('Barra')
    } else {
      SetEspecie('FootElB')
      SetEspecieBarra('BarraB')
    }
  }
  React.useEffect(confirmacion2, [])
  return (
    <div className={Especie}>
      <span className="TextoFoot">{Texto}</span>
      <div className={EspecieBarra}></div>
    </div>
  )
}

export default ElementoFoot
