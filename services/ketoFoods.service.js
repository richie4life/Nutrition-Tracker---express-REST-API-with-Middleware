import { KetoFoodsRepository } from "../repositories/ketoFoods.repository.js";

export class KetoFoodsService {
    static getKetoFoods() {
        console.log('\tKetoFoodsService : getKetoFoods()');
        return KetoFoodsRepository.getKetoFoods();
    }
};