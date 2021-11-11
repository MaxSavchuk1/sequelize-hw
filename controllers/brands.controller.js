const { Brand } = require('./../models');
const { Op } = require('sequelize');
const _ = require('lodash');
const sequelize = require('sequelize');

module.exports.getBrands = async (req, res, next) => {
  try {
    const foundBrands = await Brand.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      raw: true,
      limit: 10,
    });
    res.status(200).send({ data: foundBrands });
  } catch (e) {
    next(e);
  }
};

module.exports.createBrand = async (req, res, next) => {
  const { body } = req;
  try {
    const createdBrand = await Brand.create(body);
    const prepairedBrand = _.omit(createdBrand.get(), [
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send({ data: prepairedBrand });
  } catch (e) {
    next(e);
  }
};

module.exports.getAllBrandModels = async (req, res, next) => {
  const {
    params: { brandName },
  } = req;

  try {
    const [foundBrand] = await Brand.findAll({
      where: sequelize.where(
        sequelize.fn('lower', sequelize.col('brandName')),
        brandName
      ),
    });
    if (foundBrand === undefined) {
      return res.status(404).send('NOT FOUND');
    }
    const phonesOfBrand = await foundBrand.getPhones({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'brandId'],
      },
    });
    res.status(200).send({ data: phonesOfBrand });
  } catch (e) {
    next(e);
  }
};

module.exports.createPhoneByName = async (req, res, next) => {
  const {
    params: { brandName },
    body,
  } = req;
  try {
    const [foundBrand] = await Brand.findAll({
      where: sequelize.where(
        sequelize.fn('lower', sequelize.col('brandName')),
        brandName
      ),
    });

    if (foundBrand === undefined) {
      return res.status(404).send('NOT FOUND');
    }
    const newPhone = await foundBrand.createPhone(body);
    const prepairedPhone = _.omit(newPhone.get(), ['createdAt', 'updatedAt']);
    res.status(201).send({ data: prepairedPhone });
  } catch (e) {
    next(e);
  }
};
