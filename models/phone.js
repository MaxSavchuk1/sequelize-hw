'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    static associate (models) {
      // define association here
    }
  }
  Phone.init(
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      manufacturedAt: {
        type: DataTypes.SNALLINT,
        allowNull: false,
        validate: { isInt: true, min: 1984, max: new Date().getFullYear() },
      },
      ramSize: {
        type: DataTypes.REAL,
        validate: { min: 0.1, max: 64 },
      },
      processor: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      screenDiagonal: {
        type: DataTypes.REAL,
        allowNull: false,
        validate: { min: 0.5, max: 10 },
      },
      isHavingNFC: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
      indexes: [
        {
          unique: true,
          fields: ['brand', 'model'],
        },
      ],
    }
  );
  return Phone;
};
