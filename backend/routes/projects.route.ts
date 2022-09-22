import express from "express";
import {
  allProjects,
  projectDeatils,
  editProject,
  deleteProject,
} from "../controllers/projects.controller";
import auth from "../middlewires/auth";
import admin from "../middlewires/admin";

const router = express.Router();

router.route("/").get(allProjects);
router
  .route("/:id")
  .get(projectDeatils)
  .delete(auth, admin, deleteProject)
  .put(auth, admin, editProject);
// router.route("/edit/:id").put(auth, admin, editProject);
// router.route("/delete/:id").delete(auth, admin, deleteProject);

export default router;
