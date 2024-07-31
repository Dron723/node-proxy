const express = require("express");
const router = express.Router();

router.post("/testing-api", async (req, res) => {
  const { data } = req.body;

  res.status(200).json({
    message: `${data} is here! Connection established`,
  });
});

module.exports = router;
