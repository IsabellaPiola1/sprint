import React from 'react'
import Menu from './components/menu/Menu'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/footer/Footer'
import { Link } from "react-router-dom"

export default function App() {
    return (
        <>
            <Menu />
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Menu</Link></li>
              <li><Link to="/pag1">Cadastro Candidato</Link></li>
              <li><Link to="/pag1">Cadastro Empresa</Link></li>
              <li><Link to="/pag2">Curriculo</Link></li> 
              <li><Link to="/nv">Comunidade</Link></li> 
              <li><Link to="/nv">Login</Link></li> 
              <li><Link to="/nv">Perfil Candidato</Link></li> 
              <li><Link to="/nv">Perfil Empresa</Link></li> 
              <li><Link to="/nv">Saiba Mais</Link></li> 
            </ul>
            <MainRoutes />
            <Footer />
        </>
    )
}
