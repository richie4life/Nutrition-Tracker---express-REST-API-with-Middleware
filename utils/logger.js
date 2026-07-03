import { createLogger, format, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
const { combine, timestamp, label, printf } = format;

const level = 'debug';

const myFormat = printf(({ level, message, label, timestamp }) => {
  return JSON.stringify({
    loglevel: level,
    message,
    timestamp,
    service: label,
  });
});

export const logger = createLogger({
  level,
  format: combine(
    label({ label: 'ketoFoods-API' }),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console(),
  ]
});