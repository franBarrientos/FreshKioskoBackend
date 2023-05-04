const customHeader = (req, res, next) => {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey == "123") {
      next();
    } else {
      res.status(403);
      res.send({ error: "API_KEY_INVALIDATE" });
    }
  } catch (error) {
    res.status(403);
    res.send({ error: "ERROR_CUSTOM_HEADER" });
  }
};

module.exports = { customHeader };
