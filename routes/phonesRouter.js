const { Router } = require('express');
const { phonesController } = require('../controllers');
const phonesRouter = Router();

phonesRouter
  .route('/')
  .get(phonesController.getPhones)
  .post(phonesController.createPhone);

phonesRouter
  .route('/:phoneId')
  .get(phonesController.getPhoneById)
  .delete(phonesController.deletePhone)
  .patch(phonesController.updatePhone)
  .put(phonesController.updateOrCreatePhone, phonesController.createPhone);

module.exports = phonesRouter;
