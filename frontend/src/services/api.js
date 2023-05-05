import axios from "axios"

const api = axios.create({
    baseURL:'http://localhost:3333'
})

export async function cadastro(nome,email,senha){
    const data = await api.post('/autenticacao/cadastro',{
        nome:nome,
        senha:senha,
        email:email
    })

    return data
}

export async function login(email,senha){
    const data = await api.post('/autenticacao/login',{
        senha:senha,
        email:email
    })

    return data
}