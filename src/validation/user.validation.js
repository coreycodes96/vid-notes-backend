import Joi from 'joi';

export const createAnAccountValidation = data => {
    //validation
    const createAnAccount = Joi.object({
        username: Joi.string().max(25).required(),
        password: Joi.string().min(8).max(255).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    })

    //Return validation response
    return createAnAccount.validate(data, { abortEarly: false, stripUnknown: true });
}

export const loginValidation = data => {
    //validation
    const login = Joi.object({
        username: Joi.string().max(255).required(),
        password: Joi.string().min(8).max(255).required(),
    });

    //Return validation response
    return login.validate(data, { abortEarly: false });
}