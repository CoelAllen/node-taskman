const express = require("express");
const app = express();

// Routes
app.get("/hello", (req, res) => {
  res.send("Task Manager");
});

// Going to need put, post, get, getById and delete
// app.get('')-------------get all tasks
// app.post('')------------make new task
// app.get(':id')----------getTaskById
// app.put/patch(':id')---edit task
// app.delete(':id')-------delete task

const port = 3000;

// @ts-ignore
app.listen(port, console.log(`Server is listening on port ${port}`));
