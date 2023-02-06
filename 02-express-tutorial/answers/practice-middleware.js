const consoleLog = function (req, res, next){
    console.log('LOG');
    next();
}

module.exports = consoleLog