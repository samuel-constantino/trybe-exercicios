const rescue = require('express-rescue');

const getCep = rescue(async (req, res, _next) => {
    res.status(200).json({message: "OK"});
})

module.exports = {
    getCep
};