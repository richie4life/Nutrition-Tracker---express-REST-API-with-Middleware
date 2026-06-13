import { Constants } from '../utils/constants.js';
import { logger } from '../utils/logger.js';
import { database } from '../utils/database.js';


export class KetoFoodsRepository {
  static getKetoFoods() {
    logger.debug('KetoFoodsRepository : getKetoFoods()');
    // return KETO_FOODS;

    return database.db.collection(Constants.KETO_COLLECTION).find(
      {},
      {
        projection: {
          _id: 0
        }
      }
    ).toArray();
  }

  // getKetoFoodsByid
  static getKetoFoodsByid(id) {
    logger.debug(`KetoFoodsRepository : getKetoFoodsByid(${id})`);
    const parsedId = isNaN(id) ? id : Number(id);
    return database.db.collection(Constants.KETO_COLLECTION).findOne(
      { id },
      {
        projection: {
          _id: 0
        }
      }
    );
  }

  // createKetoFood
  static createKetoFoods = async (NewketoFood) => {
    logger.debug('KetoFoodsRepository : createKetoFood()');

    await database.db.collection(Constants.KETO_COLLECTION).insertOne(NewketoFood); // This will insert the new keto food into the database and return the result of the insertion
    delete NewketoFood._id; // This will remove the _id field from the new keto food object that was returned from the database, since we do not want to expose the internal _id field to the client
    return NewketoFood; // This will return the new keto food that was created
  }


  // replaceKetoFood
  static replaceKetoFood = async (id, replaceKetoFood) => {
    logger.debug('KetoFoodsRepository : replaceKetoFood()');

    const result = await database.db.collection(Constants.KETO_COLLECTION).replaceOne({ id }, replaceKetoFood);

    if (result.matchedCount === 0) {
      return false; // This will return false if the keto food with the given id is not found in the database and therefore not replaced
    }


    return replaceKetoFood;
  }

  // updateKetoFood

  static updateKetoFood = async (id, updateKetoFood) => {
    logger.debug('KetoFoodsRepository : updateKetoFood()');

    // Update keto food in DB

    const updateStatement = {
      $set: {}
    }; // This will create an empty update statement object that we will populate with the fields that we want to update

    Object.keys(updateKetoFood).forEach(key => {
      if (key !== 'id') { // This will ensure that we do not allow the client to update the id of the keto food, since the id is used to identify the keto food in the database and should not be changed
        updateStatement.$set[key] = updateKetoFood[key]; // This will add the field to the $set object in the update statement, which will tell MongoDB to update that field with the new value
      }
    });

    const result = await database.db.collection(Constants.KETO_COLLECTION).findOneAndUpdate({
      id
    }, updateStatement, { returnDocument: 'after' }); // This will find the keto food with the given id in the database and update it with the fields in the update statement, and return the updated keto food

    if (result) {
      delete result._id; // This will remove the _id field from the updated keto food object that was returned from the database, since we do not want to expose the internal _id field to the client
    }


    return result; // This will return the updated keto food
  }

  // deleteKetoFood

  static deleteKetoFood = async (id) => {
    logger.debug('KetoFoodsRepository : deleteKetoFood()');

    // Delete keto food from DB

    const result = await database.db.collection(Constants.KETO_COLLECTION).deleteOne({
      id,
    }); // This will delete the keto food with the given id from the database  


    if (result.deletedCount === 0) {
      return false; // This will return false if the keto food with the given id is not found in the database and therefore not deleted
    }
    return result; // This will return true if the keto food was successfully deleted
  }
};