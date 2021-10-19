const { Router } = require('express');
const { brandsController } = require('../controllers');
const brandsRouter = Router();

brandsRouter
  .route('/')
  .get(brandsController.getBrands)
  .post(brandsController.createBrand);

brandsRouter
  .route('/:brandName')
  .get(brandsController.getAllBrandModels)
  .post(brandsController.createPhoneByName);

module.exports = brandsRouter;
