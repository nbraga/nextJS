import './index.css' //importar o arquivo CSS
import ReactDOM from 'react-dom'
import React from 'react'

import App from './App'

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


/*const el = document.getElementById('root') //Pegar Elemento por ID do INDEX.HTML
ReactDOM.render (
    'Olá React!!!', el) //Renderizar na página WEB, apontando o ID no final
*/
/*const tag = <strong>Olá React!</strong>

ReactDOM.render (
    <div>
        {tag}
    </div>,
    document.getElementById('root')
    ) 
*/
/*
ReactDOM.render (
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
        titulo="Situação do aluno" 
        aluno="Pedro" nota = {9.5}>
        </ComParametro>

        <Fragmento/>
 
        </div>,


    document.getElementById('root')
    ) 
    */

