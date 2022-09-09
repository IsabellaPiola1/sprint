import React from 'react'
import '../../index.css'
import '../css/comunidade.css'

export default function Comunidade() {
    return (
        <section>
            <div class="infos">
                <h2> Encontre a comunidade que mais combine com você! </h2>
                <div class="inicio">
                    <div class="informacoes1">
                        <h3> Nome </h3>
                        <h4> Capacidades e Certificações </h4>
                    </div>
                </div>
                <hr />
                <div class="informacoesGeral">
                    <p>
                        Grau de compatibilidade com determinada vaga:
                    </p>
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                </div>
            </div>
        </section>
    )
}