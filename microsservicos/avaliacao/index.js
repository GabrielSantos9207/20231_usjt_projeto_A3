const express = require('express')
const cors = require('cors')
const {
    criarPlugin,
    listarPlugins,
    listarPluginPorId,
    avaliarPlugin,
    deletarPlugin,
    deletarAvaliacao,
    _getAvaliacoesPorUsuario
} = require('./avaliacaoController')

const app = express()
app.use(cors())
app.use(express.json())


app.get('/plugins', listarPlugins)

app.get('/plugins/:id', listarPluginPorId)

app.post('/plugins', criarPlugin)

app.delete('/plugins/:id', deletarPlugin)

app.post('/plugins/:id/avaliacao', avaliarPlugin)

app.delete('/plugins/avaliacao/:id', deletarAvaliacao)

app.get('/plugins/avaliacoes/usuario/:id',_getAvaliacoesPorUsuario)

app.listen(4000, () => console.log('Rodando Microsserviço de Avaliação'))