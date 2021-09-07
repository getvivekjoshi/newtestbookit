class ErrorHandler extends Error {
    constructor(messsage, statusCode){
    super(messsage)
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor)
}
}


export default ErrorHandler;