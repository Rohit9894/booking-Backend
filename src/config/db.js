const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connect = async () => {
  return await mongoose.connect(process.env.URL);
};

module.exports = connect;