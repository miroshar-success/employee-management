import Projects from "../models/projectModel";
import { Request, Response } from "express";

const allProjects = async (req: Request, res: Response): Promise<void> => {
  const projects = await Projects.find({});
  if (!projects) {
    res.status(400).send("No projects found");
    throw new Error("No projects found");
  }
  res.status(200).json(projects);
};

const projectDeatils = async (req: Request, res: Response): Promise<void> => {
  const project = await Projects.findById(req.params.id);
  if (!project) {
    res.status(400).send("Project not found");
    throw new Error("Project not found");
  }
  res.status(200).json(project);
};

const editProject = async (req: any, res: Response): Promise<void> => {
  const project = await Projects.findByIdAndUpdate(req.params.id, req.body);
  if (!project) {
    res.status(400).send("Project not found");
    throw new Error("Project not found");
  }
  res.status(200).json({ message: "Project updated successfully" });
};

const deleteProject = async (req: any, res: Response): Promise<void> => {
  const project = await Projects.findByIdAndDelete(req.params.id);
  if (!project) {
    res.status(400).json({ project, message: "Oops! Something went wrong" });
  }
  res.status(200).send({ project, message: "Project Sucessfully Deleted" });
};

export { allProjects, projectDeatils, editProject, deleteProject };
