const validApiKeys = new Set(["your-api-key-1", "your-api-key-2"]);

const authenticateApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || !validApiKeys.has(apiKey)) {
    return res.status(403).json({ message: "Forbidden: Invalid API Key" });
  }
  next();
};

module.exports = authenticateApiKey;
