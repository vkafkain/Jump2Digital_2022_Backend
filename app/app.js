const express = require("express");
const app = express();
const PORT = 3000;
const {connectDB, createDB} = require("./database/connectionDB");
const companiesRoutes = require("./routes/companiesRoutes");

//create database and connect
createDB();
connectDB();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/companies", companiesRoutes);

//server
app.listen(PORT, () => {
  console.log(`listening on port: ${PORT}`);
});
