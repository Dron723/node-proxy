const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/send-email", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.postmarkapp.com/email",
      req.body,
      {
        headers: {
          "Content-Type": "application/json",
          "X-Postmark-Server-Token": process.env.POSTMARK_API_KEY,
        },
      }
    );
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({
      message: error.message,
      details: error.response ? error.response.data : null,
    });
  }
});

module.exports = router;
