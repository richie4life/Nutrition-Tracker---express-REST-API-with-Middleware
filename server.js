// Hello from the MongoDB branch!
import express from 'express';
import config from 'config';
import { ketoFoodRouter } from './routes/ketoFood.routes.js';
import { logger } from './utils/logger.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware.js';
import { database } from './utils/database.js';

const app = express();
const port = 3000;


app.use(express.static('static'));
app.use(express.json()); // this is a middleware that parses the body of the request and makes it available in req.body


app.use('/api/v1/ketoFoods', ketoFoodRouter);
app.use(errorHandlerMiddleware);

//Environment based config
const mongoConfig = config.get('mongo');

/*
const config = {
  appName: 'KetofoodsAPI',
  database: 'Keto',
  url: 'mongodb://127.0.0.1:27017',
  minPoolSize: 2,
  maxPoolSize: 10
};
*/

await database.setup({
  ...mongoConfig,
  appName: config.get('appName'),
});


app.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
});

