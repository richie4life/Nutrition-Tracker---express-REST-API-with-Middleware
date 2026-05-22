import express from 'express';
//import { KetoFoodsController } from "./controllers/ketoFoods.controller.js";
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

//query parameters are also strings, but they are optional and can be used to filter data
// app.get('/api/v1/ketoFoods', KetoFoodsController.getKetoFoods);
// app.get('/api/v1/ketoFoods/:id', KetoFoodsController.getKetoFoodsByid);
// app.post('/api/v1/ketoFoods', KetoFoodsController.createKetoFoods);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

