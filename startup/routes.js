const express = require('express');
const morgan = require('morgan');

const error = require('../middlewares/error');
const users = require('../routes/users');

module.exports = function (app) {
    app.use(express.json());
    app.use(morgan('tiny'));
    app.use('/api/users', users);
    app.use(error);    
}