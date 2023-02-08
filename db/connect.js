const mongoose = require("mongoose");

const connectDb = (url) => {
  console.log("CONNECTED TO DATABASE666");
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
module.exports = connectDb;
