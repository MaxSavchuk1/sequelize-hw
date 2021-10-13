const { Router } = require('express');
const { phonesController } = require('../controllers');
const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(phonesController.getPhones)
  .post(phonesController.createPhone);

phonesRouter.route('/:phoneId').get(phonesController.getPhoneById);
module.exports = phonesRouter;
