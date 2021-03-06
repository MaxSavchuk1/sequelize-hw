const express = require('express');
const router = require('./router');
const {
  sequelizeErrorHandler,
  errorHandler,
} = require('./middleware/errorHandlers');

const app = express();

app.use(express.json());

app.use('/api', router);

app.use(sequelizeErrorHandler, errorHandler);

module.exports = app;
