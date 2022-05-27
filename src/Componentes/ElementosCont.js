/* eslint-disable object-curly-newline */
import React from 'react'
import '../Styles/ElementosCont.css'

// eslint-disable-next-line react/prop-types
const ElementosCont = ({ Imagen, TituloA, TituloB, Fecha, Principal }) => {
  const [Inside, SetInside] = React.useState('Inside')
  const confirmacion = () => {
    if (TituloB === '') {
      SetInside('InsideHidden')
    } else {
      SetInside('Inside')
    }
  }
  React.useEffect(confirmacion, [])
  return (
    <div className="EC">
      <img src={Imagen} alt="Imagen" className="Imagen" />
      <div className="Tags">
        <button type="button" className="Inside" alt="Inicial">{TituloA}</button>
        <button type="button" className={Inside} alt="Inicial">{TituloB}</button>
      </div>
      <span>{Fecha}</span>
      <h3>{Principal}</h3>
    </div>
  )
}

export default ElementosCont
