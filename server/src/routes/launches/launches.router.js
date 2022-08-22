import { Router } from "express";
import {
  AddNewLaunch,
  getAllLaunches,
  DeleteLaunches,
} from "../../controllers/launches.controller.js";

const launchesRouter = Router();

launchesRouter.get("/", getAllLaunches);
launchesRouter.post("/", AddNewLaunch);
launchesRouter.delete("/:id", DeleteLaunches);

export default launchesRouter;
