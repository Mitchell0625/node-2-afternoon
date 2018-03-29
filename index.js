require("dotenv").config();
const express = require("express");
const massive = require("massive");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const pc = require("./products_controller");

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  // console.log(dbInstance);
  app.set("db", dbInstance);
});

app.get("/api/products", pc.getAll);
app.get("/api/product/:id", pc.getOne);
app.put("/api/product/:id", pc.update);
app.post("/api/product", pc.create);
app.delete("/api/product/:id", pc.delete);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
