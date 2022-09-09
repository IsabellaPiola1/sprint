import React from 'react'
import '../../index.css'
import '../css/perfil.css'
import { Link } from "react-router-dom"

export default function PerfilCandidato() {
    return (
        <div>
            <section>
                <div class="pesquisa">
                    <input type="text" class="txtBusca" placeholder="Buscar empresa/ cargo" />
                    <i class="fa-solid fa-magnifying-glass" id="lupa"></i>
                </div>
            </section>
            <section class="infos1">
                <div class="conteiner1">
                    <h3>Área da vaga</h3>
                    <h4><Link to="/perfil-empresa">Nome da empresa</Link></h4>
                    <hr class="linha" />
                    <p>Nível</p>
                    <hr class="linhaMenor" />
                    <p>Localização</p>
                    <hr class="linhaMenor" />
                    <p>Salário</p>
                    <hr class="linhaMenor" />
                    <p>Requisitos</p>
                    <hr class="linha" />
                    <button>Tenho Interesse</button>
                </div>
                <div class="conteiner1">
                    <h3>Área da vaga</h3>
                    <h4><Link to="/perfil-empresa">Nome da empresa </Link></h4>
                    <hr class="linha" />
                    <p>Nível</p>
                    <hr class="linhaMenor" />
                    <p>Localização</p>
                    <hr class="linhaMenor" />
                    <p>Salário</p>
                    <hr class="linhaMenor" />
                    <p>Requisitos</p>
                    <hr class="linha" />
                    <button>Tenho Interesse</button>
                </div>
                <div class="conteiner1">
                    <h3>Desenvolvedor Front-end</h3>
                    <h4><Link to=".perfil-empresa">TOTVS</Link></h4>
                    <hr class="linha" />
                    <p>Estágio</p>
                    <hr class="linhaMenor" />
                    <p>São Paulo, SP</p>
                    <hr class="linhaMenor" />
                    <p>R$1.100 - R$1.800</p>
                    <hr class="linhaMenor" />
                    <p>Fluente em inglês</p>
                    <hr class="linha" />
                    <button>Tenho Interesse</button>
                </div>
            </section>
        </div>
    )
}