const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 3000;
const data = require("./database/companies.json");
const connectDB = require("./database/connectionDB");


//create database and connect
connectDB();

//load companies.json into database



//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
// app.use(routes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//server
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
