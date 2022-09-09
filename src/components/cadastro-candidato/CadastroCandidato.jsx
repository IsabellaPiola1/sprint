import React from 'react'
import '../../index.css'
import '../css/cadastro.css'
import { Link } from "react-router-dom"


export default function CadastroCandidato() {

    return (
        <section>
            <div class="botoes">
                <Link to="/registro-empresa">
                    <button class="botao" id="target">REGISTRO EMPRESA</button></Link>
                <button class="botao" id="ativo">REGISTRO CANDIDATO</button>
            </div>
            <div class="conteiner">
                <form >
                    <fieldset>
                        <legend><span class="number">1</span> Informações do candidato</legend>
                        <input type="text" name="nome" placeholder="Seu nome completo: " required />
                        <input type="number" name="telefone" placeholder="Insira seu telefone: " required />
                        <input type="number" name="cpf" placeholder="Insira seu CPF: " required />
                        <input type="email" name="email" placeholder="Insira seu e-mail: " required />
                        <label for="genero">Seu gênero:</label>
                        <select id="genero" name="genero" required>
                                <option>Feminino</option>
                                <option>Masculino</option>
                                <option>Não binárie</option>
                                <option>Prefiro não responder</option>
                        </select>
                        <input type="password" name="senha" placeholder="Sua senha " required />
                        <input type="password" name="senha" placeholder="Confirme sua senha" required />
                        <label for="dataNascimento">Sua data de nascimento:</label>
                        <input type="date" name="dataNascimento" required />
                        <label for="area">Sua área profissional:</label>
                        <select id="area" name="area" required>
                            <optgroup label="Tecnologia">
                                <option>Analista de sistemas</option>
                                <option>Segurança de informação</option>
                                <option>Banco de dados</option>
                                <option>Qualidade de Software</option>
                                <option>Desenvolvimento de e-commerce</option>
                                <option>Técnico de informática</option>
                                <option>Outro</option>
                            </optgroup>
                        </select>
                        <label for="nivel">Seu nível profissional:</label>
                        <select id="nivel" name="nivel" required>
                            <option>Jovem-Aprendiz</option>
                            <option>Estagiário</option>
                            <option>Júnior</option>
                            <option>Sênior</option>
                            <option>Pleno</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <legend><span class="number">2</span> Informações adicionais</legend>
                        <textarea name="informacoesAdd" placeholder="Sobre você"></textarea>
                    </fieldset>
                    <input type="submit" />
                </form>
            </div>
        </section >
    )
}