const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: { type: String, required: true },
  tags: Array,
  complete: Boolean,
  date: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;