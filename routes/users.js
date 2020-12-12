const express = require('express');
const {User, validate} = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await User.find().sort('name');
    return res.status(200).send(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        return res.status(200).send(user);
    }
    return res.status(400).send();
});
router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if(error)
        return res.status(400).send(error.message);
    
    const user = new User({
        name: req.body.name, 
        phone: req.body.phone,
        address: req.body.address
    });
    await user.save();
    return res.status(200).send(user);
});

module.exports = router;