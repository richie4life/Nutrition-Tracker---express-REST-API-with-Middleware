import { KetoFoodsService } from "../services/ketoFoods.service.js";
import { logger } from '../utils/logger.js';

export class KetoFoodsController {
    static getKetoFoods(req, res) {
        logger.debug('KetoFoodsController : getKetoFoods()');

        const result  = KetoFoodsService.getKetoFoods();
        res.status(200).json(result);
    };

    // getKetoFoodsByid
    static getKetoFoodsByid(req, res) {
        const id = req.params.id;
        logger.debug(`KetoFoodsController : getKetoFoodsByid(${id})`);

        const result = KetoFoodsService.getKetoFoodsByid(id);


        if (result) {
            res.status(200).json(result);
            return;
        } else {
            res.status(404).json({ message: `Keto food with id ${id} not found` });
            return;
        }

        res.status(200).json(result);
    };

    // createKetoFood

    static createKetoFoods(req, res) {
        logger.debug('KetoFoodsController : createKetoFoods()');

        const result  = KetoFoodsService.createKetoFoods(req.body);
        res.status(200).json(result);
    };

    // replaceKetoFood

    static replaceKetoFood = (req, res) => {
        const id = req.params.id;
        logger.debug(`KetoFoodsController : replaceKetoFood(${id})`);

        const result = KetoFoodsService.replaceKetoFood(id, req.body);
        res.status(200).json(result);
    };


    static updateKetoFood = (req, res) => {
    // 1. Parse the incoming string ID to a number if it is numeric
    const id = isNaN(req.params.id) ? req.params.id : Number(req.params.id);
    
    logger.debug(`KetoFoodsController : updateKetoFood(${id})`);

    // 2. Pass the correctly typed ID into your service layer
    const result = KetoFoodsService.updateKetoFood(id, req.body);

    if (!result) {
        // This will now execute properly with your custom JSON message
        return res.status(404).json({ message: `Keto food with id ${id} not found` });
    }

    res.status(200).json(result);
    };


    static deleteKetoFood = (req, res) => {
    // 1. Parse the incoming string ID to a number if it is numeric
    const id = isNaN(req.params.id) ? req.params.id : Number(req.params.id);
    
    logger.debug(`KetoFoodsController : deleteKetoFood(${id})`);

    // 2. Pass the correctly typed ID into your service layer
    const result = KetoFoodsService.deleteKetoFood(id, req.body);

    if (!result) {
        // This will now execute properly with your custom JSON message
        return res.status(404).json({ message: `Keto food with id ${id} not found` });
    }

    res.status(200).json(result);
    };
}


