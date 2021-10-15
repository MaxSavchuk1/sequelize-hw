'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate (models) {
      // define association here
    }
  }
  Brand.init(
    {
      brandName: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: 'Brand',
    }
  );
  return Brand;
};
