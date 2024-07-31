const express = require("express");
const postmarkRoutes = require("./postmark");
const recaptchaRoutes = require("./recaptcha");
const testRoutes = require("./test");
const authenticateToken = require("../middleware/auth");

const router = express.Router();

router.use("/api", authenticateToken);
router.use("/api", postmarkRoutes);
router.use("/api", recaptchaRoutes);
router.use("/api", testRoutes);

module.exports = router;
