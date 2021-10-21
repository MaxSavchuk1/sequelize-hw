const { Phone, Brand, sequelize } = require('./../models');
const _ = require('lodash');

module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.findAll({
      include: {
        model: Brand,
        attributes: {
          include: [[sequelize.literal('"brandName"'), 'name']], // мотивация состои в том, что некрасиво смотрится Brand.brandName))
          exclude: ['createdAt', 'updatedAt', 'id', 'description', 'brandName'],
        },
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'brandId'],
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
      include: {
        model: Brand,
        attributes: {
          include: [[sequelize.literal('"brandName"'), 'name']],
          exclude: ['createdAt', 'updatedAt', 'id', 'description', 'brandName'],
        },
      },
      raw: true,
      where: { id: phoneId },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'brandId'],
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

module.exports.updateOrCreatePhone = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;
  try {
    const [count] = await Phone.update(body, {
      where: { id: phoneId },
    });
    if (count) {
      return res.status(201).send();
    }
    req.body.id = phoneId;
    next();
  } catch (e) {
    next(e);
  }
};

module.exports.deletePhone = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;
  try {
    const deletedCount = await Phone.destroy({ where: { id: phoneId } });
    if (deletedCount) {
      res.status(204).send();
    } else {
      res.status(404).send('NOT FOUND');
    }
  } catch (e) {
    next(e);
  }
};
