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

export { allProjects, projectDeatils };
