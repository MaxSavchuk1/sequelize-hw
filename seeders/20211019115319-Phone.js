'use strict';

const phonesInitialData = [
  {
    brandId: 1,
    model: 'S9',
    manufacturedAt: 2017,
    ramSize: 4,
    processor: 'Exynos 9810',
    screenDiagonal: 5.8,
    isHavingNFC: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    brandId: 2,
    model: 'iPhone 12 Pro Max',
    manufacturedAt: 2020,
    ramSize: 6,
    processor: 'Apple A14',
    screenDiagonal: 6.7,
    isHavingNFC: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Phones', phonesInitialData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Phones', null, {});
  },
};
