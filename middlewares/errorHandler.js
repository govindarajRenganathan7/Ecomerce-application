const NotFound = (req, res, next) => {
    const error = new Error(`Error : ${req.originalUrl}`);
    res.status(404);
    next(error);
}

const errorHandler = ( err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode).json({
        message: err?.message,
        stack : err?.stack,
        success: false
    })
}

module.exports = {NotFound, errorHandler}