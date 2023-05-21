const { uuid } = require('uuidv4')
const conexaoDb = require('./databaseConnection')

const { calculaNotaGeral } = require('./utils/calculaNotaGeral')
const mapeiaUsuarioAvaliacao = require('./utils/mapeiaUsuarioAvaliacao')
const emitirEvento = require('./utils/emitirEvento')

async function criarPlugin(req, res) {
    const { titulo, descricao, link, imagem } = req.body

    const pluginId = uuid()

    await conexaoDb.query(
        'insert into plugins values(?,?,?,?,?)',
        [pluginId, titulo, descricao, link, imagem]
    )

    res.json({
        id: pluginId,
        titulo,
        descricao,
        link,
        imagem
    })
}

async function listarPlugins(req, res) {

    const [rows] = await conexaoDb.query(
        'select * from plugins'
    )

    res.json(rows)
}


async function listarPluginPorId(req, res) {
    const { id } = req.params

    const [plugins] = await conexaoDb.query(
        'select * from plugins where plugins.id = ?',
        [id]
    )

    if (plugins.length === 0) {
        return res.status(404).send("Nenhum plugin encontrado com este id")
    }

    const [avaliacoes] = await conexaoDb.query(
        'select * from avaliacoes where avaliacoes.pluginId = ?',
        [id]
    )

    const ids = Array.from(new Set(avaliacoes.map(avaliacao => avaliacao.usuarioId)))

    if (avaliacoes.length === 0) {
        plugins[0].notaGeral = "Sem nota ainda :("
    }
    else {
        plugins[0].notaGeral = calculaNotaGeral(avaliacoes)

        //consulta o barramento de eventos para pegar dados dos usuarios que avaliaram
        const usuarios = await emitirEvento('get-usuarios', { ids })
        plugins[0].avaliacoes = mapeiaUsuarioAvaliacao(avaliacoes, usuarios)
    }

    res.json(plugins[0])
}

async function deletarPlugin(req, res) {
    const { id } = req.params

    const [plugins] = await conexaoDb.query(
        'select * from plugins where plugins.id = ?',
        [id]
    )

    if (plugins.length === 0) {
        return res.status(404).send("Nenhum plugin encontrado com este id")
    }

    await conexaoDb.query(
        'delete from plugins where plugins.id=?',
        [id]
    )

    return res.status(204).send("Plugin deletado")
}

async function avaliarPlugin(req, res) {
    const { id } = req.params
    const { comentario, nota, usuarioId } = req.body

    const avaliacaoId = uuid()

    await conexaoDb.query(
        'insert into avaliacoes values(?,?,?,?,?)',
        [avaliacaoId, comentario, nota, id, usuarioId]
    )

    res.json({
        id: avaliacaoId,
        comentario,
        nota,
        pluginId: id,
        usuarioId
    })
}

function deletarAvaliacao(req, res) {
    const { id } = req.params

    conexaoDb.query(
        'delete from avaliacoes where avaliacoes.id=?',
        [id]
    )

    return res.status(204).send("Avaliação deletada")
}

async function _getAvaliacoesPorUsuario(req, res) {
    const { id } = req.params
    const [avaliacoes] = await conexaoDb.query(
        `select avaliacoes.id, comentario, nota, pluginId, plugins.imagem, plugins.titulo, usuarioId
            from avaliacoes inner join plugins 
            where usuarioId = ?`,
        [id]
    )

    return res.send(avaliacoes)
}

module.exports = {
    criarPlugin,
    listarPlugins,
    listarPluginPorId,
    deletarPlugin,
    avaliarPlugin,
    deletarAvaliacao,
    _getAvaliacoesPorUsuario
}