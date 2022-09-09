import React from 'react'
import '../../index.css'
import './menu.css'
import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <div>
            <header>
                <div class="menu-content">
                    <nav class="menu">
                        <ul class="list-itens">
                            <li><Link to="/cadastro-candidato">Cadastro candidato</Link></li>
                            <li><Link to="/cadastro-empresa">Cadastro empresa</Link></li>
                            <li><Link to="/curriculo">Curriculo</Link></li>
                            <li><Link to="/comunidade">Comunidade</Link></li>
                            <li><Link to="/saiba-mais">Saiba Mais</Link></li>
                        </ul>
                    </nav>
                    <div class="btns">
                        <Link to="/registro-candidato"><button class="btn-exp">REGISTRO</button></Link>
                        <Link to="/login"><button class="btn-personal">LOGIN</button></Link>
                    </div>
                </div>
            </header>
            <hr/>
        </div>
    )
}