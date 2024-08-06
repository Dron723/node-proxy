const express = require("express");
const { body } = require("express-validator");
const axios = require("axios");
const router = express.Router();

router.post("/api-call", async (req, res) => {
  const { api, params } = req.body;

  const baseUrl = "https://zipcpq-qa.com";

  try {
    const response = await axios.get(`${baseUrl}/${api}`, { params });
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.response ? error.response.status : 500).json({
      message: error.message,
      details: error.response ? error.response.data : null,
    });
  }
});

module.exports = router;
