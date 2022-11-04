const Company = require("../models/Company");

const controllers = {
  async sortSize(req, res) {
    try {
      const companies = await Company.find().sort({ size: 1 });
      res.status(200).send(companies);
    } catch (error) {
      res.status(400).send("Error sorting companies by size");
    }
  },
  async sortDate(req, res) {
    try {
      const companies = await Company.find({ founded: { $ne: null } }).sort({
        founded: 1,
      });
      const nullCompanies = await Company.find({ founded: null });
      res.status(200).send({ companies, nullCompanies });
    } catch (error) {
      res.status(400).send("Error sorting companies by date");
    }
  },
  async count(req, res) {
    try {
      const companiesIndustry = await Company.aggregate([
        { $group: { _id: "$industry", total: { $sum: 1 } } },
      ]).sort({ total: 1 });
      const companiesSizes = await Company.aggregate([
        { $group: { _id: "$size", total: { $sum: 1 } } },
      ]).sort({ total: 1 });
      const companiesYear = await Company.aggregate([
        { $group: { _id: "$founded", total: { $sum: 1 } } },
      ]).sort({ total: 1 });
      res
        .status(200)
        .send({ companiesIndustry, companiesSizes, companiesYear });
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = controllers;
