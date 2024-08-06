const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const limiter = require("./middleware/rateLimiter");
const corsOptions = require("./config/corsConfig");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// mongo
// mongoose.connect('', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(cors(corsOptions));

// limiting reqs
app.use(limiter);

app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
