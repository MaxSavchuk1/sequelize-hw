const { Router } = require('express');
const phonesRouter = require('./routes/phonesRouter');

const router = Router();

router.use('/phones', phonesRouter);

module.exports = router;
