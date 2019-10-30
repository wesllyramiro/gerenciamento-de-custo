const mergeGraphql = require('merge-graphql-schemas')
const path = require('path')

const arquivos = path.join(__dirname,'./')

const {
    fileLoader,
    mergeTypes
} = mergeGraphql

const arquivosCarregados = fileLoader(arquivos)

const mergeSchemas = mergeTypes(arquivosCarregados)

module.exports = mergeSchemas