/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Styles/LateralMenu.css'
import Close from '../Images/x.png'
import LogoNegro from '../Svgs/LogoNegro'

const LateralMenu = () => {
  const [despliegue, SetDespliegue] = React.useState('PanelCovered')

  const pressed = () => {
    SetDespliegue('Panel')
  }
  const hidding = () => {
    SetDespliegue('PanelCovered')
  }

  return (
    <div className="Lateral">
      <button type="button" className="Show" onClick={pressed}>≡</button>
      <div className={despliegue}>
        <LogoNegro className="LogoNegro" />
        <button type="button" className="Close" onClick={hidding}><img src={Close} alt="Close2" /></button>
        <hr />
        <div className="AsideOptions">
          <div>Desigualdad</div>
          <div>Poder y Ciudadania</div>
          <div>Defensa del Consumidor</div>
          <div>TikTok</div>
          <div>Podcast</div>
          <div>Foto</div>
          <div>Especiales</div>
          <div>Opinión</div>
          <div>Transmedia</div>
          <div>Manual de investigación</div>
          <div>Con Pruebas</div>
          <div>Series</div>
          <div className="Extra">
            <div>INICIO DE SESIÓN</div>
            <div>|</div>
            <div>MAPA DEL SITIO</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LateralMenu
