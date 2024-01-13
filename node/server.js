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
const howWeWork = require("./src/router/howWeWork-controller.js");
const contact = require("./src/router/contact-controller.js");
const WhyArwaTechnologies = require("./src/router/WhyArwaTechnologies-controll.js");
const services = require("./src/router/Services-controller.js");
const whatWeDo = require("./src/router/whatWeDo-controller.js");
const hireSkilledProgrammer = require("./src/router/hireSkilledProgrammer-controller.js");
const portfolio = require("./src/router/portfolio-controller.js");
const developerExperties = require("./src/router/developerExperties-controller.js");
const allteamTitle = require("./src/router/allteam-title-controller.js");
const rescue = require("./src/router/rescue-controller.js");
const portfoliotitle = require("./src/router/portfolio-title-controller.js");
const resume = require("./src/router/resume-controller.js");

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
app.use("/api", howWeWork);
app.use("/api", contact);
app.use("/api", WhyArwaTechnologies);
app.use("/api", services);
app.use("/api", whatWeDo);
app.use("/api", hireSkilledProgrammer);
app.use("/api", portfolio);
app.use("/api", developerExperties);
app.use("/api", allteamTitle);
app.use("/api", rescue);
app.use("/api", portfoliotitle);
app.use("/api", resume);

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
