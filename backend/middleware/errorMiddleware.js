
//next is to say run the next piece of middleware
const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404)
    next(error);
}

const errorHandler = (err,req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 404;
        message = 'Resource not found';
    }

    res.status(statusCode).json({
        message,
        //shows error stack trace(sequence of functions) if not in production, 
        //null if is 
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

export {notFound, errorHandler}