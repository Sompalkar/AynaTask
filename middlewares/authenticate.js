const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized. Token is missing or invalid.' });
  }

  // Extract the token from the "Bearer " prefix
  const tokenWithoutBearer = token.split(' ')[1];

  try {
    // Verify the token and decode the user information

    const decodedToken = jwt.verify(tokenWithoutBearer, process.env.SECRETKEY);

    // Attach the user information to the request for future use
    req.user = decodedToken.user;

    // Call the next middleware
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized. Token is missing or invalid.' });
  }
};

module.exports = authenticateUser;
