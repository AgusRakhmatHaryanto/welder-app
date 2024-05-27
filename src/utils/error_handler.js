function errorHandler(err, req, res, next) {
    if (err) {
        console.log(er.stack);
        res.status(500).send(err.message);
    }
}

module.exports = {errorHandler}