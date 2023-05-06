const express = require('express')
const cors = require('cors')
const eventos = require('./eventosController')

const app = express()
app.use(cors())
app.use(express.json())
//trazer o usuario que fez a avaliacao
// avaliacao -> barramento -> autenticacao -> barramento -> avaliacao

app.post('/eventos', async (req, res) => {
    const { tipoEvento, dados } = req.body
    try {

        const eventoResposta = await eventos[tipoEvento](dados)
        
        return res.send(eventoResposta)
    } catch (error) {
        return res.status(400).send('Erro barramento de eventos')
    }
})

app.listen(5000, () => {
    console.log('Barramento rodando')
})