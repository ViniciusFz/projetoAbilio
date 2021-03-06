'use strict';
// ocurrency
module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('ocurrency', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrementent: true,
          allowNull: false,
        },
        message: {
           type: Sequelize.STRING,
           allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model:  'users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
          
        },
        studentId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model:'students',
            key: 'id', 
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
          
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
      return queryInterface.dropTable('ocurrency');
  }
};
