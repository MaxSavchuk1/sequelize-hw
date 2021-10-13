const { Phone } = require('./../models');
const _ = require('lodash');

module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      raw: true,
      limit: 10,
    });
    res.status(200).send({ data: foundPhones });
  } catch (e) {
    next(e);
  }
};

module.exports.createPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const createdPhone = await Phone.create(body);
    const prepairedPhone = _.omit(createdPhone.get(), [
      'createdAt',
      'updatedAt',
    ]);
    res.status(201).send({ data: prepairedPhone });
  } catch (e) {
    next(e);
  }
};

module.exports.getPhoneById = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;
  try {
    const [foundPhone] = await Phone.findAll({
      raw: true,
      where: { id: phoneId },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    if (foundPhone) {
      res.status(200).send(foundPhone);
    } else {
      res.status(404).send('NOT FOUND');
    }
  } catch (e) {
    next(e);
  }
};

module.exports.updatePhone = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

module.exports.deletePhone = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};
