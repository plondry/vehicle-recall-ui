const express = require('express');
const morgan = require('morgan');

const apiOneRouter = require('./routes/apiOneRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});
8

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 2) ROUTES
app.use('/v1/api/vehicle-recalls', apiOneRouter);


module.exports = app;