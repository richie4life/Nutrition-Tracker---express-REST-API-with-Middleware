import { v4 as uuid } from "uuid";
import { KetoFoodsRepository } from "../repositories/ketoFoods.repository.js";
import { logger } from '../utils/logger.js';

export class KetoFoodsService {
    static getKetoFoods() {
        logger.debug('KetoFoodsService : getKetoFoods()');
        return KetoFoodsRepository.getKetoFoods();
    }


    // getKetoFoodsByid
    static getKetoFoodsByid(id) {
        logger.debug(`KetoFoodsService : getKetoFoodsByid(${id})`);
        return KetoFoodsRepository.getKetoFoodsByid(id);
    }

// createKetoFood

static createKetoFoods(NewketoFood) {
        logger.debug(`\tKetoFoodsService : createKetoFoods(${JSON.stringify(NewketoFood)})`);
        NewketoFood.id = uuid();
        return KetoFoodsRepository.createKetoFoods(NewketoFood);
    }

// replaceKetoFood

static replaceKetoFood = (id, replaceKetoFood) => {
        logger.debug('\tKetoFoodsService : replaceKetoFood()');

        //  TODO: Do not let the client update the id of the keto food, we should use the existing id of the keto food to update it
        replaceKetoFood.id = id; // This will ensure that the id of the keto food is not changed when we replace it
        return KetoFoodsRepository.replaceKetoFood(id,replaceKetoFood); // This will call the replaceKetoFood method in the repository to update the keto food
    };

// updateKetoFood

static updateKetoFood = (id, updateKetoFood) => {
        logger.debug('\tKetoFoodsService : updateKetoFood()');

        //  TODO: Do not let the client update the id of the keto food, we should use the existing id of the keto food to update it
        updateKetoFood.id = id; // This will ensure that the id of the keto food is not changed when we update it
        return KetoFoodsRepository.updateKetoFood(id,updateKetoFood); // This will call the updateKetoFood method in the repository to update the keto food
    };

// deleteKetoFood

static deleteChicken = (id) => {
        logger.debug('\tChickensServices : deleteChicken()');

        //  TODO: Do not let the client update the id of the keto food, we should use the existing id of the keto food to update it
        return KetoFoodsRepository.deleteKetoFood(id); // This will call the deleteKetoFood method in the repository to delete the keto food
    };
};