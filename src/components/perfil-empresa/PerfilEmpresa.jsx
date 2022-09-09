import React from 'react'
import '../../index.css'
import '../css/perfil.css'
import { Link } from "react-router-dom"

export default function PerfilCandidato() {
    return (
        <section>
            <div class="infos">
                <h2> Perfil profissional </h2>
                <div class="inicio">
                        <div class="informacoes1">
                            <h3> *Nome da empresa* </h3>
                            <h4> *Área da empresa* </h4>
                        </div>
                </div>
                <hr/>
                    <div class="informacoesGeral">
                        <p>
                            Site da empresa:
                        </p>
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        <p>
                            E-mail:
                        </p>
                        <i class="fa-solid fa-circle-plus"></i>
                        <p>
                            Telefone:
                        </p>
                        <i class="fa-solid fa-circle-plus"></i>
                        <p>
                            CEO:
                        </p>
                        <i class="fa-solid fa-circle-plus"></i>
                        <p>
                            Canal YouTube:
                        </p>
                        <i class="fa-solid fa-circle-plus"></i>
                        <p>
                            Informações adicionais:
                        </p>
                        <i class="fa-solid fa-comments"></i>
                    </div>
            </div>
        </section>
    )
}