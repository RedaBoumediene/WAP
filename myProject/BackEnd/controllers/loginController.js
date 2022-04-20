const users = require('../models/login')

exports.login = (req,res,next) => {
    console.log('Login Controller , req.body = ',req.body);
    res.status(200).json(users.login(req.body.username,req.body.password)); 
};