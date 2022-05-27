/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react'
import '../Styles/ContenidoParteA.css'

const ContenidoParteA = () => {
  const [Titulo, SetTitulo] = React.useState('Titulo')
  const [Fondo, SetFondo] = React.useState('Fondo')

  const Escondiendo = () => {
    SetTitulo('TituloHidden')
    SetFondo('FondoHidden')
  }

  const Mostrando = () => {
    SetTitulo('Titulo')
    SetFondo('Fondo')
  }
  return (
    <div className="CA">
      <div className="Encabezado">
        <div className="Content"></div>
        <div className={Titulo}>
          <div className={Fondo}></div>
          <div className="ContenedorNombre" onMouseEnter={Escondiendo} onMouseLeave={Mostrando}>
            <span className="Nombre">
              {' '}
              Estudio de Cepal: Las élites de
              <br></br>
              Guatemala sostienen un
              <br></br>
              modelo con poca tecnología y
              <br></br>
              bajo nivel de mano de obra
              {' '}
            </span>
          </div>
          <div className="Botones">
            <button type="button" className="Info" alt="Inicial">Información</button>
            <div></div>
            <button type="button" className="Info" alt="Inicial">Poder y ciudadanía</button>
          </div>
          <h2 className="Autor">Francisco Rodriguez</h2>
        </div>
      </div>
    </div>
  )
}

export default ContenidoParteA
