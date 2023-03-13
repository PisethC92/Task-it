// import the required modules (i.e. Express, CORS and config file)
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Uses 'records.js' file to handle specific requests.
app.use(require("./routes/record"));
// get driver connection
const dbo = require("./db/conn");

// listens on the specified port and logs a message when server is running
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);

  });
  console.log(`Server is running on port: ${port}`);
});
