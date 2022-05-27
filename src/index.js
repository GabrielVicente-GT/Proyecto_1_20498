import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import Logo from './Svgs/Logo'
import Banner from './Componentes/SocialBanner'
import LateralMenu from './Componentes/LateralMenu'
import TopBoton from './Componentes/ToTheTop'
import ContentA from './Componentes/ContenidoParteA'
import ContentB from './Componentes/ContenidoParteB'
import ContentC from './Componentes/ContenidoParteC'
import ContentD from './Componentes/ContenidoParteD'

const App = () => {
  return (
    <div className="ProyectOne">
      <TopBoton />
      <div className="Header">
        <LateralMenu />
        <Banner />
        <Logo className="Logo" />
      </div>
      <ContentA />
      <ContentB />
      <ContentC />
      <ContentD />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
