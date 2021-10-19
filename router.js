const { Router } = require('express');
const brandsRouter = require('./routes/brandsRouter');
const phonesRouter = require('./routes/phonesRouter');

const router = Router();

router.use('/phones', phonesRouter);
router.use('/brands', brandsRouter);
module.exports = router;
