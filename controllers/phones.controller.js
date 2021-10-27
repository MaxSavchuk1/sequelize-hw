const { Phone, Brand, sequelize } = require('./../models');
const _ = require('lodash');

const excludedData = ['createdAt', 'updatedAt'];

module.exports.getPhonesOrPhone = async (req, res, next) => {
  const {
    params: { phoneId },
  } = req;
  let options;
  if (phoneId) {
    options = { where: { id: phoneId } };
  } else {
    options = { limit: 10 };
  }
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
      ...options,
    });
    if (foundPhones.length) {
      res.status(200).send({ data: foundPhones });
    } else {
      res.status(404).send('NOT FOUND');
    }
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
    // я решил так сделать, для ПУТ и ПАТЧ обработка в одной функции. Не вижу причин, почему нет -_-
    if (req.method === 'PUT') {
      req.body.id = phoneId;
      next();
    }
    if (req.method === 'PATCH') {
      res.status(404).send('NOT FOUND');
    }
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
