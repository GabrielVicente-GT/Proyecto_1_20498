import React from 'react'
import '../Styles/ContenidoParteD.css'
import AA from '../Images/AA.jpg'
import BB from '../Images/BB.png'
import Logo from '../Svgs/LogoNegro'
import CC from '../Images/CC.gif'
import DD from '../Images/DD.png'
import EE from '../Images/EE.png'
import FF from '../Images/FF.png'
import GG from '../Images/GG.png'
import HH from '../Images/HH.jpg'

const ContenidoParteD = () => {
  return (
    <div className="CPD">
      <div className="PiePagina">
        <div className="Jesuitas">
          <img src={AA} className="PieImg" alt="PieImg" />
          <span>con el respaldo de la </span>
          <span>Provincia de Centroamérica</span>
        </div>
        <img src={BB} className="PieImg2" alt="PieImg" />
        <Logo className="LogoFot" />
      </div>
      <div className="TextoFot">
        <div className="TextoInfot">Universidad Rafael Landívar Vista Hermosa III, Campus Central, zona 16 casa Plaza Pública junto al edificio “O”.</div>
        <div className="TextoInfot">
          Guatemala, Centroamérica. Teléfono: (502) 2426-2644 Correo electrónico:
          <span className="CorreoFot"> info@plazapublica.com.gt</span>
        </div>
      </div>
      <div className="PiePagina2">
        <img src={FF} className="PieImg3" alt="PieImg" />
        <div className="Jesuitas">
          <span>Con el apoyo de:</span>
          <img src={GG} className="PieImg4" alt="PieImg" />
        </div>
        <img src={HH} className="PieImg5" alt="PieImg" />
      </div>
      <div className="PiePagina3">
        <img src={CC} className="PieImg6" alt="PieImg" />
        <div className="Jesuitas">
          <span>Miembro de:</span>
          <img src={DD} className="PieImg7" alt="PieImg" />
        </div>
        <img src={EE} className="PieImg8" alt="PieImg" />
      </div>
    </div>
  )
}

export default ContenidoParteD
