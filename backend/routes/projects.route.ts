import express from "express";
import {
  allProjects,
  projectDeatils,
} from "../controllers/projects.controller";

const router = express.Router();

router.route("/").get(allProjects);
router.route("/:id").get(projectDeatils);

export default router;
