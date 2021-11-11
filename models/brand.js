'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate (models) {
      Brand.hasMany(models.Phone, {
        foreignKey: 'brandId',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE',
      });
    }
  }
  Brand.init(
    {
      brandName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: { type: DataTypes.TEXT },
    },
    {
      sequelize,
      modelName: 'Brand',
    }
  );
  return Brand;
};
