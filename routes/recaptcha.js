const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/verify-recaptcha", async (req, res) => {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: req.body.token,
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
