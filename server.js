// Hello from the MongoDB branch!
import express from 'express';
import { ketoFoodRouter } from './routes/ketoFood.routes.js';
import { logger } from './utils/logger.js';
import { ketoFoodColorMiddleware } from './middleware/ketoFoodColor.middleware.js';
import { errorHandlerMiddleware } from './middleware/errorHandler.middleware.js';

const app = express();
const port = 3000;



app.use(express.json()); // this is a middleware that parses the body of the request and makes it available in req.body

app.use(ketoFoodColorMiddleware);
app.use('/api/v1/ketoFoods', ketoFoodRouter);
app.use(errorHandlerMiddleware);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

