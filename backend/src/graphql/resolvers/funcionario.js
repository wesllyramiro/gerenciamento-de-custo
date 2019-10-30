const Funcionario = require('../../model/Funcionario')

module.exports = {
    Query: {
        Funcionarios: () => Funcionario.findAll(),
        Funcionario: (_,{ id }) => Funcionario.findByPk(id)
    },

    Mutation: {
        createFuncionario: (_,{ nome,departamento_id }) => Funcionario.create({ nome ,departamento_id})
    }
}