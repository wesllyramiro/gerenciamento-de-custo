

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('funcionario',{
      id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false
      },
      departamento_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        onUpdate:'CASCADE',
        onDelete:'CASCADE',
        references:{
          model:'departamento',
          key:'id'
        }
      },
      nome:{
        type:Sequelize.STRING(200),
        allowNull:false
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
    return queryInterface.dropTable('funcionario');
  }
};
