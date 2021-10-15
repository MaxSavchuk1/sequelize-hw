'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'Phones',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        brand: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: 'actions_unique',
        },
        model: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: 'actions_unique',
        },
        manufacturedAt: {
          type: Sequelize.SMALLINT,
          allowNull: false,
        },
        ramSize: {
          type: Sequelize.REAL,
        },
        processor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        screenDiagonal: {
          type: Sequelize.REAL,
          allowNull: false,
        },
        isHavingNFC: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          actions_unique: {
            fields: ['brand', 'model'],
          },
        },
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Phones');
  },
};
