// failed response format
function failed(errorCode: string, statusCode: number = 400) {
  return {
    success: false,
    errorCode: errorCode,
    statusCode: statusCode,
  };
}

// success response format
function success(message) {
  return {
    success: true,
    message: message,
  };
}

// success response format
function successWithPayload(message, data) {
  return {
    success: true,
    data: data,
    message: message,
  };
}

export { failed, success, successWithPayload };
