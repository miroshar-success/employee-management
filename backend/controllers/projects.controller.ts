import Projects from "../models/projectModel";
import { Request, Response } from "express";

interface pageLimit {
  currentPage?: number;
  currentLimit?: number;
}

const allProjects = async (req: Request, res: Response): Promise<void> => {
  let { currentPage: pages, currentLimit: limit }: pageLimit = req.query;

  if (pages && limit) {
    const skip = (pages - 1) * limit;
    const projects = await Projects.find({}).skip(skip).limit(limit);
    if (!projects) {
      res.status(400).send("No projects found");
      throw new Error("No projects found");
    }
    res.status(200).json({ projects, pages, limit });
  } else {
    const projects = await Projects.find({});
    if (!projects) {
      res.status(400).send("No projects found");
      throw new Error("No projects found");
    }
    res.status(200).json({ projects, pages, limit });
  }
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
