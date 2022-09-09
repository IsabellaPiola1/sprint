import React from 'react'
import '../../index.css'
import '../css/curriculo.css'

export default function Curriculo() {
    return (
        <section>
            <div class="infos">
                <h2> Perfil profissional </h2>
                <div class="inicio">
                    <div class="informacoes1">
                        <h3> Nome </h3>
                        <h4> Nível e área profissional </h4>
                    </div>
                </div>
                <hr />
                <div class="informacoesGeral">
                    <p>
                        Currículo:
                    </p>
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    <p>
                        Adicionar experiências profissionais:
                    </p>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p>
                        Adicionar formação acadêmica:
                    </p>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p>
                        Adicionar cursos extracurriculares:
                    </p>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p>
                        Adicionar idioma:
                    </p>
                    <i class="fa-solid fa-circle-plus"></i>
                    <p>
                        Link GitHub:
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