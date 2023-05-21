const express = require('express')
const cors = require('cors')
const {
    cadastrarUsuario,
    login,
    _getUsuarios,
    getUsuarioPorId
} = require('./autenticacaoController')

const app = express()
app.use(cors())
app.use(express.json())

app.post('/autenticacao/cadastro', cadastrarUsuario)


app.post('/autenticacao/login', login)

app.get('/autenticacao/usuarios', _getUsuarios)

app.get('/autenticacao/usuarios/:id', getUsuarioPorId)

app.listen(8080, () => console.log("Rodando Microsserviço de Autenticação"))