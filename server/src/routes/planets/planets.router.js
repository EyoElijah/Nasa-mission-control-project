import { Router } from "express";
import { getAllplanets } from "../../controllers/planets.controller.js";

const planetsRouter = Router();

planetsRouter.get("/", getAllplanets);

export default planetsRouter;
