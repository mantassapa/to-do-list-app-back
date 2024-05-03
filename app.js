const express = require("express");
const app = express();
require("dotenv").config();
const connectToDb = require("./config/connectToDb");
const cors = require("cors");

connectToDb();

const port = process.env.PORT;
app.use(express.json());
app.use(cors());
app.options("*", cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api", require("./routes/toDoRoutes"));

app.listen(port, () => {
  console.log(`this server is running on port ${port}`);
});
