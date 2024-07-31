const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const limiter = require("./middleware/rateLimiter");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// limiting reqs
app.use(limiter);

app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
