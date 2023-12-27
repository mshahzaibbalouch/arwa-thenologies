const express = require("express");
const path = require("path");
const Employee = require("../model/employee.js");
const Fields = require("../model/field.js");

const router = express.Router();

// All data post

router.post("/employee", async (req, res) => {
  try {
    const employeesData = req.body;
    const employee = new Employee(employeesData);

    // Check if files were uploaded
    if (req.files) {
      // If files were uploaded, store the filenames in the employee document
      employee.images = req.files.map((file) => file.filename);
    }

    const employeeData = await employee.save();

    res
      .status(200)
      .send({ message: "Employee successfully saved", data: employeeData });
  } catch (error) {
    res.status(500).send(error);
  }
});

// All data is get

router.get("/field", async (req, res) => {
  try {
    const fields = await Fields.find();
    res.status(200).json(fields);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Data get on the bases of title

router.post("/field", async (req, res) => {
  try {
    const field = req.body;
    const fieldData = await Field.findOne({ title: field.title });

    res
      .status(200)
      .send({ message: "Field successfully get", data: fieldData });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
