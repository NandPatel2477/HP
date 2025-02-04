const responseHandler = {
    success: (res, data, message = "Success", status = 200) => {
      res.status(status).json({ success: true, message, data });
    },
  
    error: (res, message = "Something went wrong", status = 500) => {
      res.status(status).json({ success: false, message });
    }
  };
  
  module.exports = responseHandler;
  