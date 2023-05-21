const { uuid } = require('uuidv4')
const emitirEvento = require('./utils/emitirEvento')
const conexaoDb = require('./databaseConnection')

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
        res.send({
            nome:rows[0].nome,
            email:rows[0].email,
            id:rows[0].id
        })

    }
    else {
        res.status(400).send('Email ou senha incorretos')
    }

}

async function getUsuarioPorId(req, res) {
    const { id } = req.params

    const [usuarios] = await conexaoDb.query(
        'select nome,email,senha,id from usuarios where id = ?',
        [id]
    )

    if (usuarios.length === 0) {
        return res.status(404).send('Nenhum usuário encontrado')
    }
    usuarios[0].avaliacoes = []
    try {
        const avaliacoesDoUsuario = await emitirEvento('get-avaliacoes-por-usuario', {
            id: usuarios[0].id
        })

        usuarios[0].avaliacoes = avaliacoesDoUsuario

    } catch (error) {
        console.log('Erro Barramento de eventos')
    }

    return res.send(usuarios[0])
}

async function _getUsuarios(req, res) {
    let { ids } = req.query
    ids = ids.split(',')

    //monta a query para utilizar multiplos where
    // Ex: where (id = 2 ) or (id = 3)
    const query = ids.map(id => {
        return `(id = '${id}') or`
    }).join(' ').slice(0, -2)

    const [rows] = await conexaoDb.query(
        `select id,email,nome from usuarios where ${query}`
    )

    return res.send(rows)
}

module.exports = {
    cadastrarUsuario,
    login,
    _getUsuarios,
    getUsuarioPorId
}