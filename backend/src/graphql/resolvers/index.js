const mergeGraphql = require('merge-graphql-schemas')
const path = require('path')

const arquivos = path.join(__dirname,'./')

const {
    fileLoader
} = mergeGraphql

const arquivosCarregados = fileLoader(arquivos)

module.exports = arquivosCarregados