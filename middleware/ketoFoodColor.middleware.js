import { logger } from '../utils/logger.js';

export const ketoFoodColorMiddleware = (req, res, next) => {
    logger.info('ketoFoodColorMiddleware invoked');

    const color = req.body?.color;

    if(color === undefined || color === null) {
        logger.warn('ketoFoodColorMiddleware : no color property, calling next()');
        next();
        return;
    }

    
    logger.info(`ketoFoodColorMiddleware : req.body.color ${color}`);

    //Validation
    if (typeof color !== 'string') {
        res.status(400).json({ 
            error: 'color property must be a string' 
        });
         next();
        return;
        
    }


    

    if (color === 'red') {   
        req.body.hexColor = '#FF0000';
    } else if (color === 'green') {
        req.body.hexColor = '#00FF00';
    } else if (color === 'blue') {
        req.body.hexColor = '#0000FF';
    } 

    
    logger.info(`ketoFoodColorMiddleware : labeled food with color ${color} as  foodColor ${req.body.hexColor}`);

    next();
    return;

   
};