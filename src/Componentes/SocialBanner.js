import React from 'react'
import Twitter from '../Svgs/Twitter'
import Face from '../Svgs/Face'
import Yt from '../Svgs/Yt'
import IG from '../Svgs/Ig'
import ImageA from '../Images/lupa.png'
import ImageB from '../Images/lupa_colorizada.png'
import '../Styles/SocialBanner.css'

const SocialBanner = () => {
  return (
    <div className="Social">
      <span>Síguenos</span>
      <Twitter className="logo" />
      <Face className="logo" />
      <Yt className="logo" />
      <IG className="logo" />
      <div className="Icono">
        <img src={ImageA} alt="Icono" />
        <img src={ImageB} alt="Icono" />
      </div>
    </div>
  )
}

export default SocialBanner
