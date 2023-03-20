export class ValidatorError extends Error {
    constructor(massage, statusCode = 403, internalStatusCode = 0) {
      super(massage);
      this.coordinate = 'validation';
      this.message = massage;
      this.statusCode = statusCode;
      this.internalStatusCode = internalStatusCode;
    }
  }
  
  export class ServiceError extends Error {
    constructor(massage, statusCode, internalStatusCode = 0) {
      super(massage);
      this.coordinate = 'service';
      this.message = massage;
      this.statusCode = statusCode;
      this.internalStatusCode = internalStatusCode;
    }
  }