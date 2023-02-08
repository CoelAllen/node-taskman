const getAllTasks = (req, res) => {
  res.send("all items from TasksController");
};

const newTask = (req, res) => {
  res.json(req.body);
};

const getTaskById = (req, res) => {
  res.json({ id: req.params.id });
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
