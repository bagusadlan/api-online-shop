module.exports = {
  successResponse(response, message, data, status = 200) {
    return response.status(status).json({
      code: status,
      message,
      data
    })
  },

  errorResponse(response, message, status = 400) {
    return response.status(status).json({
      code: status,
      message
    })
  }
}