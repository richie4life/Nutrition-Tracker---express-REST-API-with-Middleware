import { KetoFoodsService } from "../services/ketoFoods.service.js";

export class KetoFoodsController {
    static getKetoFoods(req, res) {
        console.log('KetoFoodsController : getKetoFoods()');

        const result  = KetoFoodsService.getKetoFoods();
        res.status(200).json(result);
    };
}