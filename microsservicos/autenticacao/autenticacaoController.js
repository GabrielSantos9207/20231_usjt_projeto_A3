const conexaoDb = require('./databaseConnection')
const { uuid } = require('uuidv4')

async function cadastrarUsuario(req, res) {

    const { email, nome, senha } = req.body

    //verifica se existe usuário com este email
    const [rows] = await conexaoDb.query(
        'select * from usuarios where email = ?',
        [email]
    )
    if (rows.length > 0) {
        return res.status(400).send('Já existe usuário com este email')
    }

    const usuarioId = uuid()

    //salva o usuário na tabela
    await conexaoDb.query(
        'insert into usuarios values(?,?,?,?)',
        [usuarioId, nome, email, senha],
    )

    res.json({
        id: usuarioId,
        email,
        nome
    })

}
async function login(req, res) {
    const { email, senha } = req.body

    //verifica se existe usuário com email e senha passados
    const [rows] = await conexaoDb.query(
        'select * from usuarios where email = ? and senha = ?',
        [email, senha]
    )

    //caso a resposta seja maior que zero retorna
    if (rows.length > 0) {
        res.send('Você está logado')

    }
    else {
        res.status(400).send('Email ou senha incorretos')
    }

}

module.exports = {
    cadastrarUsuario,
    login
}