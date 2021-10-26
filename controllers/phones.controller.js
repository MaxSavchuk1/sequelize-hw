const { Phone, Brand, sequelize } = require('./../models');
const _ = require('lodash');

const excludedData = ['createdAt', 'updatedAt'];

module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.findAll({
      include: {
        model: Brand,
        attributes: {
          include: [[sequelize.literal('"brandName"'), 'name']], // мотивация состоит в том, что некрасиво смотрится Brand.brandName))
          exclude: [...excludedData, 'id', 'description', 'brandName'],
        },
      },
      attributes: {
        exclude: [...excludedData, 'brandId'],
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
    const prepairedPhone = _.omit(createdPhone.get(), excludedData);
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
          exclude: [...excludedData, 'id', 'description', 'brandName'],
        },
      },
      raw: true,
      where: { id: phoneId },
      attributes: {
        exclude: [...excludedData, 'brandId'],
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
    const [count, [updatedPhone]] = await Phone.update(body, {
      where: { id: phoneId },
      returning: true,
    });
    if (count) {
      const prepairedPhone = _.omit(updatedPhone.get(), excludedData);
      return res.status(200).send({ data: prepairedPhone });
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

module.exports.updatePhone = async (req, res, next) => {
  const {
    body,
    params: { phoneId },
  } = req;
  try {
    const [count, [updatedPhone]] = await Phone.update(body, {
      where: { id: phoneId },
      returning: true,
    });
    if (count) {
      const prepairedPhone = _.omit(updatedPhone.get(), excludedData);
      return res.status(200).send({ data: prepairedPhone });
    }
  } catch (e) {
    next(e);
  }
};
