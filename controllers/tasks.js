const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("get all tasks from controller.");
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
};
const getTask = (req, res) => {
  res.send("get Task");
};
const updateTask = (req, res) => {
  res.send("update Task");
};
const deleteTask = (req, res) => {
  res.send("delete Task");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
