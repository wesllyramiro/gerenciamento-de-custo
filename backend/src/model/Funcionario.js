const { Model, DataTypes } = require('sequelize')
    
class Funcionario extends Model {
    static init(connection){
        super.init({
            nome:DataTypes.STRING(200)
        },{
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Departamento,{ foreignKey: 'departamento_id' , as :'departamento' })
    }
}

module.exports = Funcionario