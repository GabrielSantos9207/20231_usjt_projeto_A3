const express = require('express')

const app = express()

const usuarios = []

app.use(express.json())

app.post('/autenticacao/cadastro', (req, res) => {
    const { email, nome, senha } = req.body

    const temUsuarioComEsteEmail = usuarios.find(usuario => {
        if (usuario.email === email) {
            return usuario
        }
    })

    if(temUsuarioComEsteEmail){
        res.status(400).send('Já existe usuário com este email')
    }

    usuarios.push({
        nome,
        senha,
        email
    })

    res.send('Usuário criado com sucesso')
})

app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

app.post('/autenticacao/login', (req, res) => {
    const { email, senha } = req.body

    const temUsuario = usuarios.find(usuario => {
        if (usuario.email === email && usuario.senha === senha) {
            return usuario
        }
    })

    if(temUsuario){
        res.send('Você está logado')
    }
    else{
        res.status(400).send('Email ou senha incorretos')
    }

})

app.listen(3000, () => console.log("Rodando Microsserviço de Autenticação"))