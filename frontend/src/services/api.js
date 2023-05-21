import axios from "axios"

const authApi = axios.create({
    baseURL: 'http://localhost:8080'
})

const avalApi = axios.create({
    baseURL: 'http://localhost:4000'
})

export async function cadastro(nome, email, senha) {
    const data = await authApi.post('/autenticacao/cadastro', {
        nome: nome,
        senha: senha,
        email: email
    })

    return data
}

export async function login(email, senha) {
    const { data } = await authApi.post('/autenticacao/login', {
        senha: senha,
        email: email
    })

    return data
}

export async function getPlugins() {
    const { data } = await avalApi.get('/plugins')

    return data
}

export async function getPlugin(id) {
    const { data } = await avalApi.get(`/plugins/${id}`)

    return data
}

export async function avaliarPlugin(pluginId, avaliacao) {
    const {comentario,nota,usuarioId} = avaliacao
    const { data } = await avalApi.post(`/plugins/${pluginId}/avaliacao`, {
        comentario,
        nota,
        usuarioId
    })

    return data
}