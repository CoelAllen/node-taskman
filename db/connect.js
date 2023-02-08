const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://coelallen:HasSaidPoop!@classdemo.4r6a7kg.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionString)
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch((err) => console.log(err));
