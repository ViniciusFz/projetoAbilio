'use strict';
// student
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('students', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrementent: true,
          allowNull: false,
        },
        name: {
           type: Sequelize.STRING,
           allowNull: false,
        },
        email: {
           type: Sequelize.STRING, 
           allowNull: false,
        },
        document: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        telephone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        update_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
     });
  
  },





  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('students');
  }
};
