import * as httpStatus from "http-status";

// handle not found errors
export const notFound = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND).send({
    success: false,
    message: "Requested Resource Not Found",
  });
};

// handle internal server errors
export const internalServerError = (err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR).send({
    success: false,
    message: err.message,
  });
};

// handle bad request errors
export const badRequest = (err, req, res, next) => {
  res.status(err.status || httpStatus.BAD_REQUEST).send({
    success: false,
    message: err.errors,
  });
};
