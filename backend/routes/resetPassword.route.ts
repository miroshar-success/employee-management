import express from "express";
import {
  getRestPassword,
  postRestPassword,
} from "../controllers/forgetPassword.controller";

const router = express.Router();

router.route("/:id/:token").get(getRestPassword);
router.route("/newPassword").put(postRestPassword);

export default router;
