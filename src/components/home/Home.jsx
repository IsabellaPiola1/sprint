import React from 'react'
import '../../index.css'
import './home.css'
import { Link } from "react-router-dom"

export default function Home() {

    return (
        <div>
            <section class="cadastro">
                <div class="textos">
                    <div>
                        <p>Encontre as melhores vagas de estágio para você!</p>
                        <div class="btns">
                            <Link to="./CadastroCandidato.html"><button class="btn-exp botao1">SOU CANDIDATO!</button></Link>
                        </div>
                    </div>
                    <div id="ou">
                        <p>OU</p>
                    </div>
                    <div>
                        <p>Encontre os melhores candidatos para sua vaga de estágio!</p>
                        <div class="btns">
                            <Link to="./CadastroEmpresa.html"><button class="btn-exp botao1">SOU EMPRESA!</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="sobre">
                <h2>Quem somos e o que podemos oferecer de diferente?</h2>
                <p>
                    A LIMIF'S será um site voltado para estudantes, pessoas de primeiro emprego ou estagiárias que gostariam de
                    uma plataforma mais descontraída e de fácil entendimento para procura de vagas de emprego, já 
                    que grandes empresas encontram dificuldades em achar o estagiário ideal.
                </p>
                <p>
                    Além disso, muitos estudantes encontraram dificuldades em achar um estágio
                    adequado para a área desejada. As plataformas existentes no dia de hoje são mais focadas para
                    pessoas experientes, ou seja, os jovens que estão começando agora não tem tanta visibilidade e com
                    isso, sentem mais dificuldades em montar seus currículos e acabam desistindo de entrar nas plataformas.
                </p>
                <p>
                    Mas como um bom site, vamos resolver seus problemas!! Não precisaram mais ver videos no youtube com o intuito
                    de facilitar seu cadastro. Aqui você irá conseguir fazer todos os procedimentos sozinho sem dor de cabeça! Se 
                    junte a nós nessa nova jornada.
                </p>
                <p>
                    Está em busca do seu primeiro emprego? Clique no botão e se registre.
                </p>
            </section>
            <section class="servicos">
                <div class="botoes">
                    <button class="botao" id="candidato">VANTAGENS</button>
                </div>
                <div class="box-pai">
                    <div class="box-filho">
                        <p>Recebe vagas de acordo com seu perfil</p>
                    </div>
                    <div class="box-filho">
                        <p>Faz seu currículo completo pela nossa plataforma</p>
                    </div>
                    <div class="box-filho">
                        <p>Encontra as melhores empresas para você trabalhar</p>
                    </div>
                    <div class="box-filho">
                        <p>Podera se comunicar com outros candidatos através das comunidades</p>
                    </div>
                </div>
                <div class="box-pai">
                    <div class="box-filho">
                        <p>Recebe candidatos adequados para as vagas abertas na sua empresa</p>
                    </div>
                    <div class="box-filho">
                        <p>Vê todas as informações necessárias do seu futuro funcionário e recebe informações atualizadas sobre diversas!</p>
                    </div>
                    <div class="box-filho">
                        <p>Pode entrar em contato com o candidato sem ter que sair da plataforma</p>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}