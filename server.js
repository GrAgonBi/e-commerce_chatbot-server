const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.get("/", (_req, res) => {
  return res.json("Welcome");
});
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
