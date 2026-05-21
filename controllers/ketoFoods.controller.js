import { KetoFoodsService } from "../services/ketoFoods.service.js";

export class KetoFoodsController {
    static getKetoFoods(req, res) {
        console.log('KetoFoodsController : getKetoFoods()');

        const result  = KetoFoodsService.getKetoFoods();
        res.status(200).json(result);
    };

    // getKetoFoodsBylog_id
    static getKetoFoodsBylog_id(req, res) {
        console.log('KetoFoodsController : getKetoFoodsBylog_id()');

        const result = KetoFoodsService.getKetoFoodsBylog_id(req.params.log_id);
        res.status(200).json(result);
    };

    // createKetoFood

    // replaceKetoFood

    // updateKetoFood

    // deleteKetoFood
}


