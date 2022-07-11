import * as Joi from 'joi';

export const configValidationSchema = Joi.object({
  NODE_ENV: Joi.valid('development', 'production').default('development'),
  DATABASE_HOST: Joi.string().default('localhost'),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  COFFEE_FOO: Joi.string().default('bar'),
});
