let KETO_FOODS = [
  {
    "id": 648506,
    "title": "Flank Steak with Chimichurri Sauce",
    "image": "https://spoonacular.com/recipeImages/648506-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 420, "unit": "kcal" },
        { "name": "Fat", "amount": 32, "unit": "g" },
        { "name": "Protein", "amount": 28, "unit": "g" },
        { "name": "Net Carbs", "amount": 3, "unit": "g" }
      ]
    },
    "color": "blue"
  },
  {
    "id": 637999,
    "title": "Lemon Garlic Baked Salmon",
    "image": "https://spoonacular.com/recipeImages/637999-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 380, "unit": "kcal" },
        { "name": "Fat", "amount": 26, "unit": "g" },
        { "name": "Protein", "amount": 34, "unit": "g" },
        { "name": "Net Carbs", "amount": 1, "unit": "g" }
      ]
    },
    "color": "red"
  },
  {
    "id": 652423,
    "title": "Creamy Garlic Parmesan Mushroom Chicken",
    "image": "https://spoonacular.com/recipeImages/652423-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 510, "unit": "kcal" },
        { "name": "Fat", "amount": 38, "unit": "g" },
        { "name": "Protein", "amount": 36, "unit": "g" },
        { "name": "Net Carbs", "amount": 4, "unit": "g" }
      ]
    },
    "color": "red"
  },
  {
    "id": 661234,
    "title": "Bacon Wrapped Jalapeno Poppers",
    "image": "https://spoonacular.com/recipeImages/661234-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 290, "unit": "kcal" },
        { "name": "Fat", "amount": 24, "unit": "g" },
        { "name": "Protein", "amount": 12, "unit": "g" },
        { "name": "Net Carbs", "amount": 2, "unit": "g" }
      ]
    },
    "color": "red"
  },
  {
    "id": 674321,
    "title": "Avocado Egg Salad",
    "image": "https://spoonacular.com/recipeImages/674321-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 340, "unit": "kcal" },
        { "name": "Fat", "amount": 30, "unit": "g" },
        { "name": "Protein", "amount": 14, "unit": "g" },
        { "name": "Net Carbs", "amount": 3, "unit": "g" }
      ]
    },
    "color": "green"
  },
  {
    "id": 689102,
    "title": "Cheesy Garlic Cauliflower Mash",
    "image": "https://spoonacular.com/recipeImages/689102-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 180, "unit": "kcal" },
        { "name": "Fat", "amount": 14, "unit": "g" },
        { "name": "Protein", "amount": 6, "unit": "g" },
        { "name": "Net Carbs", "amount": 4, "unit": "g" }
      ]
    },
    "color": "green"
  },
  {
    "id": 695543,
    "title": "Keto Butter Coffee (Bulletproof)",
    "image": "https://spoonacular.com/recipeImages/695543-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 230, "unit": "kcal" },
        { "name": "Fat", "amount": 25, "unit": "g" },
        { "name": "Protein", "amount": 0, "unit": "g" },
        { "name": "Net Carbs", "amount": 0, "unit": "g" }
      ]
    },
    "color": "blue"
  },
  {
    "id": 712233,
    "title": "Crispy Garlic Parmesan Pork Chops",
    "image": "https://spoonacular.com/recipeImages/712233-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 460, "unit": "kcal" },
        { "name": "Fat", "amount": 31, "unit": "g" },
        { "name": "Protein", "amount": 42, "unit": "g" },
        { "name": "Net Carbs", "amount": 1, "unit": "g" }
      ]
    },
    "color": "blue"
  },
  {
    "id": 728844,
    "title": "Spinach and Feta Crustless Quiche",
    "image": "https://spoonacular.com/recipeImages/728844-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 260, "unit": "kcal" },
        { "name": "Fat", "amount": 20, "unit": "g" },
        { "name": "Protein", "amount": 16, "unit": "g" },
        { "name": "Net Carbs", "amount": 3, "unit": "g" }
      ]
    },
    "color": "green"
  },
  {
    "id": 734411,
    "title": "Everything Bagel Celery Sticks with Cream Cheese",
    "image": "https://spoonacular.com/recipeImages/734411-312x231.jpg",
    "diet": "keto",
    "nutrition": {
      "nutrients": [
        { "name": "Calories", "amount": 150, "unit": "kcal" },
        { "name": "Fat", "amount": 13, "unit": "g" },
        { "name": "Protein", "amount": 3, "unit": "g" },
        { "name": "Net Carbs", "amount": 2, "unit": "g" }
      ]
    },
    "color": "green"
  }
];

import { logger } from '../utils/logger.js';

export class KetoFoodsRepository {
    static getKetoFoods() {
        logger.debug('KetoFoodsRepository : getKetoFoods()');
        return KETO_FOODS;
    } 

    // getKetoFoodsByid
    static getKetoFoodsByid(id) {
        logger.debug(`KetoFoodsRepository : getKetoFoodsByid(${id})`);
        const parsedId = isNaN(id) ? id : Number(id);
        return KETO_FOODS.find(ketoFood => ketoFood.id === parsedId);
    }

    // createKetoFood
    static createKetoFoods(NewketoFood) {
        logger.debug('KetoFoodsRepository : createKetoFood()');
        KETO_FOODS.push(NewketoFood);
        return NewketoFood;
    }


  // replaceKetoFood
    static replaceKetoFood = (id, replaceKetoFood) => {
      logger.debug('KetoFoodsRepository : replaceKetoFood()');

    // 1. Convert the incoming string ID to a number to match your mock data array types
    const parsedId = isNaN(id) ? id : Number(id);

    // 2. Explicitly ensure the object being saved also uses the numeric ID format
    if (typeof replaceKetoFood.id !== 'undefined' && !isNaN(replaceKetoFood.id)) {
        replaceKetoFood.id = Number(replaceKetoFood.id);
    }

    // 3. Search using the correctly typed ID
    const index = KETO_FOODS.findIndex(ketoFood => ketoFood.id === parsedId);

    if (index !== -1) {
        // Replace the existing food item at its original position
        KETO_FOODS[index] = replaceKetoFood;
    } else {
        // Only push if the item genuinely does not exist under either data type
        KETO_FOODS.push(replaceKetoFood);
    }

    return replaceKetoFood;
  }

    // updateKetoFood

    static updateKetoFood = (id, updateKetoFood) => {
        logger.debug('KetoFoodsRepository : updateKetoFood()');

        // Update keto food in DB

        const ketoFood = KETO_FOODS.find(ketoFood => ketoFood.id === id); // This will find the existing keto food with the same id from the list

        if (!ketoFood) {
            return null; // This will return null if the keto food with the given id is not found in the list
        }

        Object.keys(updateKetoFood).forEach(key => {
            ketoFood[key] = updateKetoFood[key]; // This will update the existing keto food with the new values from the updateKetoFood object
        });


        return ketoFood; // This will return the updated keto food
    }

    // deleteKetoFood

    static deleteKetoFood = (id) => {
        logger.debug('KetoFoodsRepository : deleteKetoFood()');

        // Delete keto food from DB
        const originalsize = KETO_FOODS.length; // This will store the original size of the list before deleting the keto food
        KETO_FOODS = KETO_FOODS.filter(ketoFood => ketoFood.id !== id); // This will remove the existing keto food with the same id from the list

        if (KETO_FOODS.length === originalsize) {
            return false; // This will return false if the keto food with the given id is not found in the list and therefore not deleted
        }
        return true; // This will return true if the keto food was successfully deleted
    }
};