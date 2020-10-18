require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const apiRoutes  = require("./api-routes");



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to db established"));

app.use(express.json());
app.use("/api", apiRoutes);
app.listen(process.env.PORT, () => console.log(`server has started at port ${process.env.PORT}`));