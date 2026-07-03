import express from 'express';
import { KetoFoodsController } from '../controllers/ketoFoods.controller.js';
import { ketoFoodColorMiddleware } from '../middleware/ketoFoodColor.middleware.js';

export const ketoFoodRouter = express.Router();

ketoFoodRouter.get('/', KetoFoodsController.getKetoFoods);
ketoFoodRouter.get('/:id', KetoFoodsController.getKetoFoodsByid);
ketoFoodRouter.post('/', ketoFoodColorMiddleware, KetoFoodsController.createKetoFoods);
ketoFoodRouter.put('/:id', ketoFoodColorMiddleware, KetoFoodsController.replaceKetoFood);
ketoFoodRouter.patch('/:id', ketoFoodColorMiddleware, KetoFoodsController.updateKetoFood);
ketoFoodRouter.delete('/:id', KetoFoodsController.deleteKetoFood);