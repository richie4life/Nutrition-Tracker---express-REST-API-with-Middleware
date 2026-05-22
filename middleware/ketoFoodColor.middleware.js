import { logger } from '../utils/logger.js';

export const ketoFoodColorMiddleware = (req, res, next) => {
    logger.info('ketoFoodColorMiddleware invoked');

    // The '|| {}' ensures it falls back to an empty object if req.body doesn't exist
    //const { color, id } = req.body || {};
    // const color = req.body?.color;
    const color = req.body?.color;
    // const id = req.body?.id;

    if(color === undefined || color === null) {
        logger.warn('ketoFoodColorMiddleware : no color property, calling next()');
        next();
        return;
    }

    // if(id === undefined || id === null) {
    //     logger.warn('ketoFoodColorMiddleware : no id property, calling next()');
    //     next();
    //     return;
    // }

    // if (!req.body.color) {
    //     logger.warn('ketoFoodColorMiddleware : color property not found, calling next()');
    //     next();
    //     return;
    // }

    
    logger.info(`ketoFoodColorMiddleware : req.body.color ${color}`);

    //Validation
    if (typeof color !== 'string') {
        res.status(400).json({ 
            error: 'color property must be a string' 
        });
         next();
        return;
        
    }

    // if (typeof id === 'string') {
    //     const error = new Error(`Invalid value: 'id' must be a number, but received a string.`);
    //     error.status = 400; // Attach a custom HTTP status code
    //     error.type = 'ValidationError'; 
    //     return next(error); // Pass the error to the error handler
    // }


    

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