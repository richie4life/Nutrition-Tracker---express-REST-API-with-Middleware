import { KetoFoodsRepository } from "../repositories/ketoFoods.repository.js";

export class KetoFoodsService {
    static getKetoFoods() {
        console.log('\tKetoFoodsService : getKetoFoods()');
        return KetoFoodsRepository.getKetoFoods();
    }


    // getKetoFoodsBylog_id
    static getKetoFoodsBylog_id(log_id) {
        console.log('\tKetoFoodsService : getKetoFoodsBylog_id()');
        return KetoFoodsRepository.getKetoFoodsBylog_id(log_id);
    }

// createKetoFood

// replaceKetoFood

// updateKetoFood

// deleteKetoFood
};