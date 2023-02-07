const getAllTasks = (req, res) => {
  res.send("all items from TasksController");
};

const getTaskById = (req, res) => {
  res.send("getTaskById");
};

const newTask = (req, res) => {
  res.send("make new task");
};

const editTask = (req, res) => {
  res.send("edit task");
};

const removeTask = (req, res) => {
  res.send("delete task");
};
module.exports = {
  getAllTasks,
  getTaskById,
  newTask,
  editTask,
  removeTask,
};
