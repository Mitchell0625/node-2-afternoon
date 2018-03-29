require("dotenv").config();
const express = require("express");
const massive = require("massive");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  console.log(dbInstance);
  app.set("db", dbInstance);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
