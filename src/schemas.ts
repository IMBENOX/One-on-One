import Joi from 'joi';

export const signupSchema = Joi.object({
    user: Joi.object({
        firstName: Joi.string().pattern(new RegExp(/^[a-zA-Z]{3,}$/)).required(),
        lastName: Joi.string().pattern(new RegExp(/^[a-zA-Z]{3,}$/)).required(),
        email: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9]{1,}@[a-z]{1,}\.[a-z]{1,}$/)).required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}$/)).required(),
        gender: Joi.string().allow(''),
        service: Joi.string().allow(''),
        fitnessCategory: Joi.string().allow(''),
        suggestions: Joi.string().allow(''),
        sendInfo: Joi.string().allow(''),
    }).required()

})

export const signinSchema = Joi.object({
        username: Joi.string().pattern(new RegExp(/^[a-zA-Z]{3,}$/)).required(),
        password: Joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{4,}$/)).required(),
})