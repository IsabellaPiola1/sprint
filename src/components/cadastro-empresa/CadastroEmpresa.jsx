import React from 'react'
import '../../index.css'
import '../css/cadastro.css'
import { Link } from "react-router-dom"

export default function CadastroEmpresa() {

    return (
        <section>
            <div class="botoes">
                <button class="botao" id="ativo">REGISTRO EMPRESA</button>
                <Link to="/registro-candidato">
                    <button class="botao" id="target">REGISTRO CANDIDATO</button>
                </Link>
            </div>
            <div class="conteiner">
                <form>
                    <fieldset />
                    <legend><span class="number">1</span> Informações da empresa</legend>
                    <input type="text" name="nome" placeholder="Nome da empresa " required />
                    <input type="number" name="cnpj" placeholder="CNPJ" required />
                    <input type="text" name="localidade" placeholder="Localidade" required />
                    <input type="password" name="senha" placeholder="Sua senha " required />
                    <input type="password" name="senha" placeholder="Confirme sua senha" required />
                    <input type="tel" name="celular" placeholder="E-mail" required />
                    <fieldset>
                        <legend><span class="number">2</span> Informações adicionais</legend>
                        <textarea name="informacoesAdd" placeholder="Sobre a empresa"></textarea>
                    </fieldset>
                    <input type="submit" />
                </form>
            </div>
        </section>

    )
}