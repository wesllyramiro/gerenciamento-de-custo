const { Model, DataTypes } = require('sequelize')
    
class Departamento extends Model {
    static init(connection){
        super.init({
            nome:DataTypes.STRING(200)
        },{
            sequelize:connection,
            tableName:'departamento'
        })
    }
}

module.exports = Departamento