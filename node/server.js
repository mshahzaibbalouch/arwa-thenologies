const express = require("express");
const mongoose = require("mongoose");
const employee = require("./src/router/employee-controller");
const field = require("./src/router/field-controller");
const navbar = require("./src/router/navbar-controller.js");
const hero = require("./src/router/hero-controller");
const allteam = require("./src/router/all-team-controller.js");
const testimnial = require("./src/router/testimonials-controller.js");
const questions = require("./src/router/questions-controller.js");
const hireStep = require("./src/router/hire-step-controller.js");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", employee);
app.use("/api", field);
app.use("/api", hero);
app.use("/api", navbar);
app.use("/api", allteam);
app.use("/api", testimnial);
app.use("/api", questions);
app.use("/api", hireStep);

mongoose
  .connect(
    "mongodb+srv://hassaantahir:rock1122@mongocluster.j8ojcpq.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Database connected..");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(5000, () => {
  console.log("Server is running on port", 5000);
});
