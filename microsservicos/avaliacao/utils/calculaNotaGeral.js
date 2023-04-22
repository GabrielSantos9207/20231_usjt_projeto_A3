const Decimal = require('decimal.js')

function calculaNotaGeral(avaliacoes) {

    const somaTotal = avaliacoes.map(avaliacao => {
        return Number(avaliacao.nota)
    })
    .reduce((soma, prox) =>
        soma + prox, 0
    )

    const notaGeral = new Decimal(somaTotal / avaliacoes.length).toFixed(2)

    return notaGeral
}

module.exports = {
    calculaNotaGeral
}