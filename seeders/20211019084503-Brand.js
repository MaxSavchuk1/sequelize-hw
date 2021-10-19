'use strict';

const brandsInitialData = [
  {
    brandName: 'Samsung',
    description:
      'The flagship Galaxy smartphones are the Galaxy S and the phablet Galaxy Note series. The Galaxy Z series are foldable smartphones. The Galaxy A series are mid-range. Other lines like the c, j, and w are discontinued.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    brandName: 'Apple',
    description:
      "The iPhone is a line of smartphones designed and marketed by Apple Inc. that use Apple's iOS mobile operating system. The first-generation iPhone was announced by then-Apple CEO Steve Jobs on January 9, 2007.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    brandName: 'Xiaomi',
    description:
      'Xiaomi Inc., is a Chinese designer and manufacturer of consumer electronics and related software, home appliances, and household items. Behind Samsung, it is the second largest manufacturer of smartphones, all of which run the MIUI operating system, a fork of Android.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    brandName: 'Nokia',
    description:
      'The Nokia brand returned to the mobile and smartphone market in 2016 through a licensing arrangement with HMD Global.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    brandName: 'OnePlus',
    description:
      'OnePlus was founded on 17 December 2013 by former Oppo vice-president Pete Lau and Carl Pei.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Brands', brandsInitialData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Brands', null, {});
  },
};
