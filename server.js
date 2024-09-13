const express = require("express");

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const { bgCyan } = require("colors");
const connectDB = require("./config/config");
const path = require("path");
require("colors");
// DOTENV CONFIG
dotenv.config();
// db config
connectDB();
// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// routes
app.use("/api/items", require("./routes/itemRoutes"));
// user
app.use("/api/users", require("./routes/userRoutes"));
// bill
app.use("/api/bills", require("./routes/billsRoutes"));

// static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const PORT = process.env.PORT || 8080;
// Listen
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgCyan.white);
});
