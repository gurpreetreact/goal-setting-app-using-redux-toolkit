const { env } = process

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode).json({
    message: err.message,
    stack: env.NODE_ENV === 'production' ? null : err.stack
  })
};

module.exports = {
  errorHandler
}