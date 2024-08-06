const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  recaptchaSecret: { type: String, required: true },
  postmarkKey: { type: String, required: true },
});

module.exports = mongoose.model("Project", projectSchema);
