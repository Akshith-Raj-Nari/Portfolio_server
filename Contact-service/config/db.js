const mongoose = require("mongoose");
const dontenv = require("dotenv");

dontenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/contacts";

const connection = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database ✅");
  } catch (error) {
    console.error("Error connecting to Database: ", error);
    process.exit(1);
  }
};

module.exports = { connection };
