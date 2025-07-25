const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
require("colors");
const connectDb = require("./config/config");

// dotenv Config
dotenv.config();

// DB Config
connectDb();

// Rest Object
const app = express();

// Middleweare
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//Port
const PORT = process.env.PORT || 8080;

// Listen

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
