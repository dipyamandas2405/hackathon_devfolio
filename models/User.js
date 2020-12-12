const mongoose = require('mongoose');
const Joi = require('joi');

const User = mongoose.model('user', new mongoose.Schema({
    name: {
        type: String, 
        minlength: 3, 
        maxlength: 30, 
        required: true
    }, 
    phone: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true
    }, 
    address: {
        type: String,
        minlength: 10,
        maxlength: 50,
        required: false
    }
}));

const validate = (user) => {
    const schema = {
        name: Joi.string().required().min(3).max(30), 
        phone: Joi.string().required().min(10).max(10),
        address: Joi.string().required().min(10).max(50)
    }
    return Joi.validate(user, schema);
};

module.exports = {
    User, 
    validate
}