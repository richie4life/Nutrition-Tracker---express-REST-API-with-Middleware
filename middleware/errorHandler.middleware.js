import { logger } from '../utils/logger.js';

export const errorHandlerMiddleware = (err, req, res, next) => {
    // Fallback to 500 Internal Server Error if no status is explicitly set
    const statusCode = err.status || 500; 

    logger.error(`Error encountered: ${err.message}`);

    // Send a clean, structured JSON response to the client
    res.status(statusCode).json({
        success: false,
        error: {
            type: err.type || 'ServerError',
            message: err.message
        }
    });
};