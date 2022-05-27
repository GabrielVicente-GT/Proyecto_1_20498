import React from 'react'
import '../Styles/ToTheTop.css'
import Icon from '../Images/AbrirMenuGray.png'

const ToTheTop = () => {
  const [Boton, SetBoton] = React.useState('GoTopHidden')

  const Verificador = () => {
    if (document.documentElement.scrollTop > 1) {
      SetBoton('GoTop')
    } else if (document.documentElement.scrollTop < 1) {
      SetBoton('GoTopHidden')
    }
  }
  window.addEventListener('scroll', Verificador)
  return (
    <div className="Top">
      <button type="button" className={Boton} alt="Inicial" onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0 }) }}><img className="Extra2" src={Icon} alt="Icono" /></button>
    </div>
  )
}

export default ToTheTop
