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
        } else {
            res.status(404).json({ message: `Keto food with id ${id} not found` });
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

    // updateKetoFood

    static updateKetoFood = (req, res) => {
        const id = req.params.id;
        logger.debug(`KetoFoodsController : updateKetoFood(${id})`);

        const result = KetoFoodsService.updateKetoFood(id, req.body);

        if (!result) {
            //return res.status(404).json({ message: `Keto food with id ${id} not found` });
            res.sendStatus(404);
            return;
        }

        res.status(200).json(result);
    };

    // deleteKetoFood

    static deleteKetoFood = (req, res) => {
        const id = req.params.id;
        logger.debug(`KetoFoodsController : deleteKetoFood(${id})`);

        const result = KetoFoodsService.deleteKetoFood(id);
        if (!result) {
            //return res.status(404).json({ message: `Keto food with id ${id} not found` });
            res.sendStatus(404);
            return;
        }

        res.sendStatus(200);
    };
}


