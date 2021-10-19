const { Router } = require('express');
const { brandsController } = require('../controllers');
const brandsRouter = Router();

brandsRouter
  .route('/')
  .get(brandsController.getBrands)
  .post(brandsController.createBrand);

module.exports = brandsRouter;
