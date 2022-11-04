const mongoose = require("mongoose");
let data = require("./companies.json");
const Company = require("../models/Company");

const createDB = async () => {
  try {
    await Company.deleteMany();
    data.forEach(async (companies) => {
      await Company.create(companies);
    });
    console.log("database created");
  } catch (error) {
    throw error;
  }
};

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/companies");
    console.log("connected to database");
  } catch (error) {
    throw error;
    }
};

module.exports = { connectDB, createDB };
