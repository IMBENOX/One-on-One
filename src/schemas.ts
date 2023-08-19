import Joi from 'joi';

export const signupSchema = Joi.object({
    user: Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().required(),
        gender: Joi.string().allow(''),
        service: Joi.string().allow(''),
        fitnessCategory: Joi.string().allow(''),
        suggestions: Joi.string().allow(''),
        sendInfo: Joi.string().allow(''),
    }).required()

})