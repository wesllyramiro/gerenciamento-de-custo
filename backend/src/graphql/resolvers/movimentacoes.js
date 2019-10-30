const Movimentacoes = require('../../model/Funcionario')

module.exports = {
    Query: {
        Movimentacoes: () => Movimentacoes.findAll(),
        Movimentacao: (_,{ id }) => Movimentacoes.findByPk(id)
    },

    Mutation: {
        createMovimentacoes: (_,{ 
            funcionario_id,
            descricao,
            valor 
        }) => Movimentacoes.create({ funcionario_id ,descricao,valor})
    }
}