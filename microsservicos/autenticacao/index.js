const express = require('express')
const { cadastrarUsuario, login } = require('./autenticacaoController')
const app = express()

app.use(express.json())

app.post('/autenticacao/cadastro',cadastrarUsuario)


app.post('/autenticacao/login',login)

app.listen(3000, () => console.log("Rodando Microsserviço de Autenticação"))