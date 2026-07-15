import { KetoFoodsService } from "../services/ketoFoods.service.js";
import { logger } from '../utils/logger.js';

export class KetoFoodsController {
    static getKetoFoods = async (req, res, next) => {
        logger.debug('KetoFoodsController : getKetoFoods()');

        const result = await KetoFoodsService.getKetoFoods();
        res.status(200).json(result);
    };

    // getKetoFoodsByid
    static getKetoFoodsByid = async (req, res) => {
        const id = req.params.id;
        logger.debug(`KetoFoodsController : getKetoFoodsByid(${id})`);

        const result = await KetoFoodsService.getKetoFoodsByid(id);


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

    static createKetoFoods = async (req, res) => {
        logger.debug('KetoFoodsController : createKetoFoods()');

        if (req.file?.filename) {
            req.body.imageUrl = `${Constants.IMAGE_STATIC_PATH}${req.file.filename}`;
        }

        if (req.body?.calories) {
            req.body.calories = Number(req.body.calories) || 0;
        };

        if (req.body?.fat) {
            req.body.fat = Number(req.body.fat) || 0;
        };

        if (req.body?.protein) {
            req.body.protein = Number(req.body.protein) || 0;
        };

        if (req.body?.netCarbs) {
            req.body.netCarbs = Number(req.body.netCarbs) || 0;
        };

        const result = await KetoFoodsService.createKetoFoods(req.body);
        res.status(200).json(result);
    };

    // replaceKetoFood

    static replaceKetoFood = async (req, res, next) => {
        const id = req.params.id;
        logger.debug(`KetoFoodsController : replaceKetoFood(${id})`);

        const result = await KetoFoodsService.replaceKetoFood(id, req.body);
        if (!result) {
            //return res.status(404).json({ message: `Chicken with id ${id} not found` });
            res.sendStatus(404);
            return;
        }
        res.status(200).json(result);
    };

    // updateKetoFood
    static updateKetoFood = async (req, res) => {
        // 1. Parse the incoming string ID to a number if it is numeric
        const id = isNaN(req.params.id) ? req.params.id : Number(req.params.id);

        logger.debug(`KetoFoodsController : updateKetoFood(${id})`);

        // 2. Pass the correctly typed ID into your service layer
        const result = await KetoFoodsService.updateKetoFood(id, req.body);

        if (!result) {
            // This will now execute properly with your custom JSON message
            return res.status(404).json({ message: `Keto food with id ${id} not found` });
        }

        res.status(200).json(result);
    };

    // deleteKetoFood
    static deleteKetoFood = async (req, res) => {
        // 1. Parse the incoming string ID to a number if it is numeric
        const id = isNaN(req.params.id) ? req.params.id : Number(req.params.id);

        logger.debug(`KetoFoodsController : deleteKetoFood(${id})`);

        // 2. Pass the correctly typed ID into your service layer
        const result = await KetoFoodsService.deleteKetoFood(id);

        if (!result) {
            // This will now execute properly with your custom JSON message
            return res.status(404).json({ message: `Keto food with id ${id} not found` });
        }

        res.status(200).json({ message: `Keto food with id ${id} deleted` });
    };
}


