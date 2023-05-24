const Joi = require('joi');

const createUserSchema = Joi.object().keys({
    number: Joi.string().required(),
    password: Joi.string().regex(/^[A-Za-z0-5]{2,8}$/).required(),
    confirm_password: Joi.any().equal(Joi.ref('password')).required().label('confirm password').messages({'any.only': '{{#label}} does not match'}),
})

const options = {
    abortEarly:false,
    errors: {
        wrap: {
            label: '',
        },
    },

};

const loginUserSchema = Joi.object().keys({
    number:Joi.string().required(), 
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
});

module.exports = { createUserSchema, options, loginUserSchema }