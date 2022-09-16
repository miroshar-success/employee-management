import express from "express";
import {
  allUserInfo,
  employeeOwnInfo,
  userInfo,
} from "../controllers/userInfo.contollers";
import auth from "../middlewires/auth";
import admin from "../middlewires/admin";

const router = express.Router();

router.route("/allusers").get(auth, admin, allUserInfo);
router.route("/profile").get(auth, employeeOwnInfo);
router.route("/:id").get(userInfo);

export default router;
