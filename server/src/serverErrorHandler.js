const serverErrorHandler = (err, req, res, next) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      error: err.message,
    });
  } else {
    res.status(500).json({
      error: "Something went wrong!",
    });
  }
};

module.exports = serverErrorHandler;
