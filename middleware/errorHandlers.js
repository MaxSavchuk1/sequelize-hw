const {
  Sequelize: { BaseError, UniqueConstraintError, ValidationError },
} = require('./../models');

module.exports.sequelizeErrorHandler = (err, req, res, next) => {
  if (err instanceof UniqueConstraintError) {
    return res
      .status(409)
      .send({ errors: [{ title: 'Already exists', details: err.errors }] });
  }
  if (err instanceof ValidationError) {
    return res.status(422).send({
      errors: [
        {
          title: 'Incorrect data',
          details: err.errors,
        },
      ],
    });
  }
  if (err instanceof BaseError) {
    return res.status(418).send({
      errors: [{ title: 'Something strange happened :)', details: err.errors }],
    });
  }
  next(err);
};

module.exports.errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return;
  }
  res
    .status(err?.status ?? 500)
    .send({ errors: [{ title: err?.message ?? 'Internal server error' }] });
};
