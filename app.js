// create app.js from model, controller, and route
require("dotenv").config({ path: "./config/config.env" });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const connectDB = require("./config/dbConnect");
connectDB();

app.get("/", (req, res, next) => {
    res.send("Api is working");
    }
);  // test api

// middleware
app.use(bodyParser.json());
app.use(cors());

// routes
const questionsRouter = require("./routes/questions");
app.use("/questions", questionsRouter);

// error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
}
);

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
