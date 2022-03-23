import Joi from 'joi';

export const createVideoValidation = data => {
    //validation
    const createVideo = Joi.object({
        title: Joi.string().max(40).required(),
        url: Joi.required(),
    })

    //Return validation response
    return createVideo.validate(data, { abortEarly: false, stripUnknown: true });
}