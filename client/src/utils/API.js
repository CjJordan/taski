import axios from "axios";

export default {
  getTasks: function() {
    return axios.get("/api/tasks");
  },
  
  getTask: function(id) {
    return axios.get("/api/tasks/" + id);
  },
  deleteTask: function(id) {
    return axios.delete("/api/tasks/" + id);
  },
  saveTask: function(taskData) {
    return axios.post("/api/tasks", taskData);
  }
};
