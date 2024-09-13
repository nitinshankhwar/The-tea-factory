const mongoose = require("mongoose");

require("colors");

// connectDB Function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connect ${conn.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`Error : ${error.message}`.bgRed);
    process.exit(1);
  }
};
// export

module.exports = connectDB;
