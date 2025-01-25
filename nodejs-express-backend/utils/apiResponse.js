// utils/apiResponse.js

const httpStatus = require('http-status');

const successResponse = (data, statusCode = httpStatus.OK, message = 'Success') => ({
  data,
  status: 'success',
  code: statusCode,
  message
});

const errorResponse = (message, statusCode = httpStatus.INTERNAL_SERVER_ERROR, errors = []) => ({
  status: 'error',
  code: statusCode,
  message,
  errors
});

const validationErrorResponse = (errors) => ({
  status: 'error',
  code: httpStatus.BAD_REQUEST,
  message: 'Validation Failed',
  errors: Object.values(errors).map(err => ({
    field: err.path,  
    message: err.message
  }))
});

module.exports = {
  successResponse,
  errorResponse,
  validationErrorResponse
};