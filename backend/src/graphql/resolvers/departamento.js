const Departamento = require('../../model/Departamento')

module.exports = {
    Query: {
        Departamentos: () => Departamento.findAll(),
        Departamento: (_,{ id }) => Departamento.findByPk(id)
    },

    Mutation: {
        createDepartamento: (_,{ nome }) => Departamento.create({nome})
    }
}