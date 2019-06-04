const moment = require('moment');

const middleware = (req,res,next)=>
{
    console.log("middleware called "+ ` ${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);

    next();  // on givng this only the other methods will be called
}

module.exports = middleware;