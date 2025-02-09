const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection is successfull");
});

connection.on("error", (error) => {
  console.log("Error in MongoDB conncetion ", error);
});

module.exports = mongoose;
