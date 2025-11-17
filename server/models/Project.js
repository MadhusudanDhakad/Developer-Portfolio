import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // URL or local path to the project image
      required: true,
    },
    technologies: {
      type: [String], // e.g., ["React", "Node.js", "MongoDB"]
      required: true,
    },
    github: {
      type: String,
    },
    liveDemo: {
      type: String,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;