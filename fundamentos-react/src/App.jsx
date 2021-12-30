import './App.css'
import React from 'react'


import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Card from './components/layout/Card'
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'

export default function App(props) {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>

            <div className="Cards">

                <Card titulo="#08 - Renderização Condicional" color="#982395">
                    <ParOuImpar numero={20}></ParOuImpar>
                    <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
                </Card>

                <Card titulo="#07 - Desafio Repetição" color="#3a9ad9">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#ff4c65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componentes com Filhos" color="#00c8f8">
                    <Familia sobrenome="Braga">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <NumeroAleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento />
                </Card>


                <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Pedro" nota={9.5}>
                    </ComParametro>
                </Card>


                <Card titulo="#01 - Primeiro" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>

    )
}

