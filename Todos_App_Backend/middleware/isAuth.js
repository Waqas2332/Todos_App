const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authenticated = req.get("Authorization");
  if (!authenticated) {
    const error = new Error("Not Authenticated");
    error.statusCode = 401;
    throw error;
  }
  const token = authenticated.split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, "secretKey");
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }
  if (!decodedToken) {
    const error = new Error("Not Authentication");
    error.statusCode = 401;
    throw error;
  }
  req.email = decodedToken.email;
  req.userId = decodedToken.userId;
  next();
};
