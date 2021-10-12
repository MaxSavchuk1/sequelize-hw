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
          validate: { isInt: true, min: 1984, max: new Date().getFullYear() },
        },
        ramSize: {
          type: Sequelize.REAL,
          validate: { min: 0.1, max: 64 },
        },
        processor: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        screenDiagonal: {
          type: Sequelize.REAL,
          allowNull: false,
          validate: { min: 0.5, max: 10 },
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
