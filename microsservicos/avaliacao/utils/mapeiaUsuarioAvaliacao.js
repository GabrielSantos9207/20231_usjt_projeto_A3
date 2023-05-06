function mapeiaUsuarioAvaliacao(avaliacoes, usuarios) {
    const avaliacoesComUsuarios =
        avaliacoes.map(avaliacao => {
            const usuario = usuarios.find(usuario => usuario.id === avaliacao.usuarioId)
            return {
                id: avaliacao.id,
                comentario: avaliacao.comentario,
                nota: avaliacao.nota,
                pluginId: avaliacao.pluginId,
                usuario
            }
        })

    return avaliacoesComUsuarios
}

module.exports = mapeiaUsuarioAvaliacao