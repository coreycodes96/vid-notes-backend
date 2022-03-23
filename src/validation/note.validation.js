import Joi from 'joi';

export const createNoteValidation = data => {
    //validation
    const createNote = Joi.object({
        title: Joi.string().max(40).required(),
        body: Joi.required(),
        time: Joi.required(),
    })

    //Return validation response
    return createNote.validate(data, { abortEarly: false, stripUnknown: true });
}