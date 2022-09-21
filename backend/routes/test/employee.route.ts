import express from "express";
import { addEmployee } from "../../controllers/test/employee.controller";

const router = express.Router();

router.route("/").post(addEmployee);

export default router;
