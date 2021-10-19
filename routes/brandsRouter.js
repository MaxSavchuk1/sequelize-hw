const { Router } = require('express');
const { brandsController } = require('../controllers');
const brandsRouter = Router();

brandsRouter
  .route('/')
  .get(brandsController.getBrands)
  .post(brandsController.createBrand);

brandsRouter
  .route('/:brandId/all_phones')
  .get(brandsController.getAllBrandModels);

module.exports = brandsRouter;
