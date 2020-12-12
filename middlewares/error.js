module.exports = function (err, req, res, next) {   
    console.error(err.message);
    return res.status(500).send('Internal Server Error!');
};