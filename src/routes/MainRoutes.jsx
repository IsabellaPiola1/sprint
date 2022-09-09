import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../components/home/Home'
import CadastroCandidato from '../components/cadastro-candidato/CadastroCandidato'
import CadastroEmpresa from '../components/cadastro-empresa/CadastroEmpresa'
import Login from '../components/login/Login'
import Comunidade from '../components/comunidade/Comunidade'
import Curriculo from '../components/curriculo/Curriculo'
import SaibaMais from '../components/saiba-mais/SaibaMais'
import PerfilCandidato from '../components/perfil-candidato/PerfilCandidato'
import PerfilEmpresa from '../components/perfil-empresa/PerfilEmpresa'

export default function MainRoutes(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cadastro-candidato" element={<CadastroCandidato/>}/>
                <Route path="/cadastro-empresa" element={<CadastroEmpresa/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/comunidade" element={<Comunidade/>}/> 
                <Route path="/curriculo" element={<Curriculo/>}/>
                <Route path="/saiba-mais" element={<SaibaMais/>}/>
                <Route path="/perfil-candidato" element={<PerfilCandidato/>}/>
                <Route path="/perfil-empresa" element={<PerfilEmpresa/>}/>
            </Routes>
        </>
    )
}