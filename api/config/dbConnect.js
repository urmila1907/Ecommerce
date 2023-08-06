const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4,
    });
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = dbConnect;
