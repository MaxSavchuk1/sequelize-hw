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
  {
    brandId: 1,
    model: 'Galaxy S20 FE',
    manufacturedAt: 2020,
    ramSize: 6,
    processor: 'Exynos 990',
    screenDiagonal: 6.5,
    isHavingNFC: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    brandId: 4,
    model: '1.4',
    manufacturedAt: 2021,
    ramSize: 2,
    processor: 'Snapdragon 215',
    screenDiagonal: 6.51,
    isHavingNFC: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    brandId: 2,
    model: 'iPhone 11',
    manufacturedAt: 2019,
    ramSize: 4,
    processor: 'Apple A13',
    screenDiagonal: 6.1,
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
