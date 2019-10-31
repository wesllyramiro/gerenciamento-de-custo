const { Model, DataTypes } = require('sequelize')
    
class Funcionario extends Model {
    static init(connection){
        super.init({
            nome:DataTypes.STRING(200),
            departamento_id:DataTypes.INTEGER
        },{
            sequelize:connection,
            tableName: 'funcionario'
        })
    }

    static associate(models){
        this.belongsTo(models.Departamento,{ foreignKey: 'departamento_id' , as :'departamento' })
    }
}

module.exports = Funcionario