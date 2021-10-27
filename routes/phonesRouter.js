const { Router } = require('express');
const { phonesController } = require('../controllers');
const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(phonesController.getPhonesOrPhone)
  .post(phonesController.createPhone);

phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhonesOrPhone)
  .delete(phonesController.deletePhone)
  .patch(phonesController.updateOrCreatePhone)
  .put(phonesController.updateOrCreatePhone, phonesController.createPhone);

module.exports = phonesRouter;
