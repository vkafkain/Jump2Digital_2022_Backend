const mongoose = require("mongoose");
const { MongoClient } = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/"

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/Company_analytics");
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

MongoClient.connect(url, function(err, db){
  if(err) throw err;
  const dbo = db.db("Company_analytics")
  
})

module.exports = connectDB;
