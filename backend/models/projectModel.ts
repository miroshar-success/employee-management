import mongoose from "mongoose";

const projectsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    client: {
      type: String,
      required: true,
    },
    pm: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    duration: {
      type: Array,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Projects = mongoose.model("Projects", projectsSchema);

export default Projects;
