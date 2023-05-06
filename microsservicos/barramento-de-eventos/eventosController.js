const axios = require('axios')

const eventos = {
    'get-usuarios': (dados) => getUsuarios(dados),
    'get-avaliacoes-por-usuario': (dados) => getAvaliacoesPorUsuario(dados),
}

async function getUsuarios(dados) {
    const { ids } = dados
    //pega os usuarios do autenticacao baseados nos ids passados e retornar
    const { data } = await axios.get(`http://localhost:3333/autenticacao/usuarios?ids=${ids}`)

    return data
}

async function getAvaliacoesPorUsuario(dados){
    const {id} = dados
  
    const {data} = await axios.get(`http://localhost:4000/plugins/avaliacoes/usuario/${id}`)

    return data
}

module.exports = eventos