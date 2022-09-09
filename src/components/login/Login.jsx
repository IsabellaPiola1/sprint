import React from 'react'

export default function Login() {
    return (
        <section>
            <div class="conteiner">
                <form>
                    <fieldset />
                    <input type="text" name="nome" placeholder="CNPJ (se empresa) ou E-MAIL (se candidato) " required />
                    <input type="password" name="senha" placeholder="Sua senha" required />
                    <input type="submit" />
                </form>
            </div>
        </section>
    )
}