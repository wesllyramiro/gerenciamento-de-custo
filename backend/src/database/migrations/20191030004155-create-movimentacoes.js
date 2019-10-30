'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movimentacoes',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
      },
      funcionario_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        references:{
          model:'funcionario',
          key:'id'
        }
      },
      descricao:{
        type:Sequelize.STRING(500),
        allowNull:true
      },
      valor:{
        type:Sequelize.DECIMAL(10,2),
        allowNull:true
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('movimentacoes');
  }
};
