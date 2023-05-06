const axios = require('axios')

async function emitirEvento(tipoEvento,dados) {
    const { data } = await axios.post('http://localhost:5000/eventos', {
        remetente: 'autenticacao',
        tipoEvento,
        dados
    })
    return data
}

module.exports = emitirEvento
