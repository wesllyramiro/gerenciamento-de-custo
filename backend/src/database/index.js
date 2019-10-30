const Sequeliza = require('sequelize')
const dbConfig = require('../config/database')

const Departamento = require('../model/Departamento')
const Funcionario = require('../model/Funcionario')
const Movimentacoes = require('../model/Movimentacoes')

const connection = new Sequeliza(dbConfig)

Departamento.init(connection)

Funcionario.init(connection)
Funcionario.associate(connection.models)

Movimentacoes.init(connection)
Movimentacoes.associate(connection.models)


module.exports = connection