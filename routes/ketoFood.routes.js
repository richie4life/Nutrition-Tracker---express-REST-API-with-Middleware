import express from 'express';
import { KetoFoodsController } from '../controllers/ketoFoods.controller.js';

export const ketoFoodRouter = express.Router();

ketoFoodRouter.get('/', KetoFoodsController.getKetoFoods);
ketoFoodRouter.get('/:id', KetoFoodsController.getKetoFoodsByid);
ketoFoodRouter.post('/', KetoFoodsController.createKetoFoods);
ketoFoodRouter.put('/:id', KetoFoodsController.replaceKetoFood);
ketoFoodRouter.patch('/:id', KetoFoodsController.updateKetoFood);
ketoFoodRouter.delete('/:id', KetoFoodsController.deleteKetoFood);