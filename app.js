const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDb = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found.js");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);

// Going to need put, post, get, getById and delete
// app.get('')-------------get all tasks
// app.post('')------------make new task
// app.get(':id')----------getTaskById
// app.put/patch(':id')---edit task
// app.delete(':id')-------delete task

const port = 3000;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    // @ts-ignore
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
