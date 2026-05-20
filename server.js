import express from 'express';
import { KetoFoodsController } from "./controllers/ketoFoods.controller.js";
const app = express();
const port = 3000;

app.use(express.json()); // this is a middleware that parses the body of the request and makes it available in req.body

//query parameters are also strings, but they are optional and can be used to filter data
app.get('/api/v1/ketoFoods', KetoFoodsController.getKetoFoods);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

