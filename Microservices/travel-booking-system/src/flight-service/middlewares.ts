import { Request, Response, NextFunction } from 'express';
import Joi, { required } from 'joi';

const flightSchema = Joi.object({
  origin: Joi.string().required().messages({
    'string.base': 'origin must be a string',
    'any.required': 'origin is required',
  }),
  destination: Joi.string().required().messages({
    'string.base': 'destination must be a string',
    'any.required': 'destination is required',
  }),
  price: Joi.number().required().messages({
    'number.base': 'price must be a number',
    'any.required': 'price is required',
  }),
  userId: Joi.string().required().messages({
    'string.base': 'userId must be a string',
    'any.required': 'usrId is required',
  })
});

const validator = (req: Request, res: Response, next: NextFunction) => {
  const { error } = flightSchema.validate(req.body);

  if (error) {
    return res.status(400).send(error);
  }
  next();
};

export default {
    validator
};
