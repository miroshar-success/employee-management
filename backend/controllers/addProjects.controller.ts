import Projects from "../models/projectModel";
import { Request, Response } from "express";

const addProjects = async (req: Request, res: Response): Promise<void> => {
  const { name, client, pm, status, duration } = req.body;

  const isProjectExists = await Projects.findOne({ name });
  if (isProjectExists) {
    res.status(400).send("Project already exists");
    throw new Error("Project already exists");
  }

  const newProject = await Projects.create({
    name,
    client,
    pm,
    status,
    duration,
  });

  if (newProject) {
    res.status(201).send({
      _id: newProject._id,
      name: newProject.name,
      client: newProject.client,
      pm: newProject.pm,
      status: newProject.status,
      duration: newProject.duration,
      successMessage: "Project created successfully",
    });
  } else {
    res.status(400);
    throw new Error("Invalid project data");
  }
};

export { addProjects };
