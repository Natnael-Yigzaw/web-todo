const mongoose = require("mongoose");
require("dotenv").config();
const db_url = process.env.DATABASE_URL;

async function main() {
  try {
    // Connect to the MongoDB database using the connection string from the .env file
    await mongoose.connect(db_url);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}
main();
