import React from 'react'
import '../../index.css'
import './footer.css'
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div>
            <hr/>
                <footer class="rodape">
                    <ul class="redes">
                        <li><Link to="/"><i class="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link to="/"><i class="fa-brands fa-instagram"></i></Link></li>
                        <li><Link to="/"><i class="fa-brands fa-twitter"></i></Link></li>
                        <li><Link to="/"><i class="fa-brands fa-linkedin-in"></i></Link></li>
                    </ul>
                    <ol class="siteMap">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cadastro-candidato">Cadastro Candidato</Link></li>
                        <li><Link to="/cadastro-empresa">Cadastro Empresa</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/curriculo">Curriculo</Link></li>
                        <li><Link to="/comunidade">Comunidade</Link></li>
                        <li><Link to="/saiba-mais">Saiba Mais</Link></li>
                        
                    </ol>
                    <div class="creditos">
                        <Link to="#">
                            <p>©DataCleans 2022</p>
                        </Link>
                        <Link to="https://storyset.com/online%22%3E">
                            <p>Online illustrations by Storyset</p>
                        </Link>
                    </div>
                </footer>
            </div>
            )
}