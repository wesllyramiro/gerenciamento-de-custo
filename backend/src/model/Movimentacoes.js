const { Model, DataTypes } = require('sequelize')
    
class Movimentacoes extends Model {
    static init(connection){
        super.init({
            descricao:DataTypes.STRING(200),
            valor:DataTypes.DECIMAL(10,2)
        },{
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Funcionario,{ foreignKey: 'funcionario_id' , as :'funcionario' })
    }
}

module.exports = Movimentacoes